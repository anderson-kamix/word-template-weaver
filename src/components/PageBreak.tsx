
import React from 'react';

interface PageBreakProps {
  pageNumber: number;
  totalPages: number;
}

const PageBreak: React.FC<PageBreakProps> = ({ pageNumber, totalPages }) => {
  return (
    <div className="flex justify-center items-center py-4 my-8 border-t border-b border-gray-300 bg-gray-50">
      <div className="text-sm text-gray-600 font-medium">
        Página {pageNumber} de {totalPages}
      </div>
    </div>
  );
};

export default PageBreak;
