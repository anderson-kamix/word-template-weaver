
import React from 'react';
import { DocumentTemplate, PlaceholderData } from '../types/document';
import { useDocumentPagination } from '../hooks/useDocumentPagination';
import PageBreak from './PageBreak';
import { Loader2, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const { pages, isLoading } = useDocumentPagination(template, placeholderData, 1100); // Increased page height

  const handlePrint = () => {
    window.print();
  };

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
      {/* Print Button */}
      <div className="mb-6 flex justify-end print:hidden">
        <Button
          onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
        >
          <Printer className="w-4 h-4 mr-2" />
          Imprimir PDF
        </Button>
      </div>

      {/* Print-specific styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-area, .print-area * {
            visibility: visible;
          }
          .print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .page-break {
            page-break-before: always;
            break-before: page;
          }
          .no-print {
            display: none !important;
          }
          .document-page {
            min-height: 297mm;
            width: 210mm;
            padding: 0;
            margin: 0;
            box-shadow: none;
            border: none;
            display: flex;
            flex-direction: column;
          }
          .fixed-header {
            padding: 12mm 15mm;
            flex-shrink: 0;
          }
          .fixed-footer {
            padding: 8mm 15mm;
            flex-shrink: 0;
          }
          .document-content {
            flex: 1;
            padding: 0 15mm;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
        }
      `}</style>

      <div className="print-area">
        {pages.map((page, index) => (
          <div key={page.id} className="relative">
            {/* Document Page Container */}
            <div className={`document-page min-h-[1200px] border border-gray-300 shadow-lg bg-white mb-6 relative flex flex-col ${index > 0 ? 'page-break' : ''}`}>
              {/* Fixed Header */}
              <div 
                className="fixed-header p-6 flex-shrink-0"
                dangerouslySetInnerHTML={{ __html: processedHeader }}
              />
              
              {/* Page Content - Takes all available space */}
              <div 
                className="document-content flex-1 px-6 py-4 leading-relaxed text-justify overflow-hidden"
                dangerouslySetInnerHTML={{ __html: page.content }}
              />
              
              {/* Fixed Footer */}
              <div 
                className="fixed-footer p-6 flex-shrink-0"
                dangerouslySetInnerHTML={{ __html: processedFooter }}
              />
              
              {/* Page Number */}
              <div className="absolute bottom-2 right-6 text-xs text-gray-500">
                {page.id} / {pages.length}
              </div>
            </div>
            
            {/* Page Break (except for last page) */}
            {index < pages.length - 1 && (
              <div className="no-print">
                <PageBreak pageNumber={page.id} totalPages={pages.length} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentViewer;
