
import React from 'react';
import { DocumentTemplate, PlaceholderData } from '../types/document';
import { useDocumentPagination } from '../hooks/useDocumentPagination';
import PageBreak from './PageBreak';
import { Loader2 } from 'lucide-react';

interface DocumentViewerProps {
  template: DocumentTemplate;
  placeholderData: PlaceholderData;
  className?: string;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({
  template,
  placeholderData,
  className = ''
}) => {
  const { pages, isLoading } = useDocumentPagination(template, placeholderData);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <span className="ml-2 text-gray-600">Gerando documento...</span>
      </div>
    );
  }

  const processedHeader = template.header.replace(
    /\{([^}]+)\}/g,
    (match, key) => placeholderData[key]?.toString() || match
  );

  const processedFooter = template.footer.replace(
    /\{([^}]+)\}/g,
    (match, key) => placeholderData[key]?.toString() || match
  );

  return (
    <div className={`max-w-4xl mx-auto bg-white ${className}`}>
      {pages.map((page, index) => (
        <div key={page.id} className="relative">
          {/* Document Page Container */}
          <div className="min-h-[1050px] p-8 border border-gray-300 shadow-lg bg-white mb-6 relative">
            {/* Fixed Header */}
            <div 
              className="fixed-header pb-4 border-b border-gray-200 mb-6"
              dangerouslySetInnerHTML={{ __html: processedHeader }}
            />
            
            {/* Page Content */}
            <div 
              className="document-content min-h-[800px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
            
            {/* Fixed Footer */}
            <div 
              className="fixed-footer pt-4 border-t border-gray-200 mt-6 absolute bottom-8 left-8 right-8"
              dangerouslySetInnerHTML={{ __html: processedFooter }}
            />
            
            {/* Page Number */}
            <div className="absolute bottom-4 right-8 text-xs text-gray-500">
              {page.id} / {pages.length}
            </div>
          </div>
          
          {/* Page Break (except for last page) */}
          {index < pages.length - 1 && (
            <PageBreak pageNumber={page.id} totalPages={pages.length} />
          )}
        </div>
      ))}
    </div>
  );
};

export default DocumentViewer;
