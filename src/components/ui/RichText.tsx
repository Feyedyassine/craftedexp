import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document, BLOCKS, INLINES, Block, Inline } from '@contentful/rich-text-types';
import { ReactNode } from 'react';

interface RichTextProps {
  content: Document;
  className?: string;
}

export function RichText({ content, className = '' }: RichTextProps) {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: Block | Inline, children: ReactNode) => (
        <p className="text-charcoal text-base sm:text-lg leading-relaxed mb-4 text-justify">
          {children}
        </p>
      ),
      [BLOCKS.HEADING_2]: (_node: Block | Inline, children: ReactNode) => (
        <h2 className="text-charcoal text-2xl sm:text-3xl font-display mb-6 mt-8">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (_node: Block | Inline, children: ReactNode) => (
        <h3 className="text-charcoal text-xl sm:text-2xl font-display mb-4 mt-6">
          {children}
        </h3>
      ),
      [BLOCKS.UL_LIST]: (_node: Block | Inline, children: ReactNode) => (
        <ul className="list-disc list-outside space-y-2 text-charcoal text-base sm:text-lg leading-relaxed ml-6 mb-4 text-justify">
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (_node: Block | Inline, children: ReactNode) => (
        <ol className="list-decimal list-outside space-y-2 text-charcoal text-base sm:text-lg leading-relaxed ml-6 mb-4 text-justify">
          {children}
        </ol>
      ),
      [BLOCKS.LIST_ITEM]: (_node: Block | Inline, children: ReactNode) => (
        <li className="text-charcoal text-base sm:text-lg leading-relaxed pl-2 text-justify">{children}</li>
      ),
      [BLOCKS.QUOTE]: (_node: Block | Inline, children: ReactNode) => (
        <blockquote className="bg-charcoal/5 border-l-4 border-charcoal p-6 rounded-r-lg my-6 italic text-justify">
          {children}
        </blockquote>
      ),
      [BLOCKS.TABLE]: (_node: Block | Inline, children: ReactNode) => {
        // Separate header rows from body rows
        const childArray = Array.isArray(children) ? children : [children];
        
        return (
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse border border-charcoal/20">
              <tbody>{childArray}</tbody>
            </table>
          </div>
        );
      },
      [BLOCKS.TABLE_ROW]: (_node: Block | Inline, children: ReactNode) => (
        <tr>
          {children}
        </tr>
      ),
      [BLOCKS.TABLE_HEADER_CELL]: (_node: Block | Inline, children: ReactNode) => (
        <th className="border border-charcoal/20 px-4 py-3 text-left text-charcoal font-display bg-charcoal/10">
          {children}
        </th>
      ),
      [BLOCKS.TABLE_CELL]: (_node: Block | Inline, children: ReactNode) => (
        <td className="border border-charcoal/20 px-4 py-3 text-charcoal">
          {children}
        </td>
      ),
      [INLINES.HYPERLINK]: (node: Block | Inline, children: ReactNode) => {
        const inlineNode = node as Inline;
        return (
          <a
            href={inlineNode.data.uri}
            className="text-charcoal underline hover:text-charcoal/70 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      },
    },
    renderText: (text: string) => {
      return text.split('\n').reduce((children: ReactNode[], textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  return (
    <div className={className}>
      {documentToReactComponents(content, options)}
    </div>
  );
}

