import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  PDFDownloadLink,
} from '@react-pdf/renderer';

import MyDocument from './MyDocument';

const MyDoc = () => (
  <Document>
    <Page>// My document data</Page>
  </Document>
);

export default function App() {
  const download = (blob) => {
    console.log(blob);
  };
  return (
    <div>
      <PDFDownloadLink document={() => <MyDocument />} fileName="test.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'indir'
        }
      </PDFDownloadLink>
      <MyDocument />
    </div>
  );
}

// Create Document Component
