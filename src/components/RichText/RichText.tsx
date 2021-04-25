import React, { useEffect } from "react"

import { graphql, useStaticQuery } from "gatsby"

import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import cn from "classnames"
import SyntaxHighlighter from "react-syntax-highlighter"
import { obsidian } from "react-syntax-highlighter/dist/esm/styles/hljs"

import * as styles from "./RichText.module.scss"

interface IRichText {
  className?: string
  richText: any
}

const RichText = ({ richText, className }: IRichText) => {
  const contentfulAssets = useStaticQuery(graphql`
    {
      allContentfulAsset {
        edges {
          node {
            contentful_id
            file {
              url
            }
            title
          }
        }
      }
    }
  `)

  useEffect(() => {
    const links = document.querySelectorAll(".richText a")
    links.forEach(link => link.setAttribute("target", "_blank"))
  })

  const Bold: React.FC<{}> = ({ children }) => <strong>{children}</strong>
  const Text: React.FC<{}> = ({ children }) => <p>{children}</p>

  const options: any = {
    renderMark: {
      [MARKS.BOLD]: (text: string) => <Bold>{text}</Bold>,
      [MARKS.CODE]: (text: string) => {
        return (
          <SyntaxHighlighter
            language="javascript"
            style={obsidian}
            showLineNumbers
          >
            {text}
          </SyntaxHighlighter>
        )
      },
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (children: React.ReactNode) => {
        return <Text>{children}</Text>
      },

      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const assetId = node.data.target.sys.id

        const asset = contentfulAssets.allContentfulAsset.edges.filter(
          (edge: any) => edge.node.contentful_id === assetId
        )

        const {
          file: { url },
          title,
        } = asset[0].node
        return <img src={url} alt={title} />
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
        const { table, __typename } = node.data.target

        switch (__typename) {
          case "ContentfulTable":
            return (
              <div className={styles.tableContainer}>
                <table className={styles.table}>
                  <tbody>
                    {table.tableData.map((tableRow: any, i: number) => (
                      <tr key={i}>
                        {tableRow.map((row: any, i: number) => (
                          <td key={i}>{row}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )

          default:
            return <div />
        }
      },
    },
  }

  return (
    <div className={cn("richText", className)}>
      {renderRichText(richText, options)}
    </div>
  )
}

export default RichText
