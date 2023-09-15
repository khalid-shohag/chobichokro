
import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import recieptBG from '..//../assets/reciept_bg.webp'

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
   
  },
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    flex: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    padding: 8,
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
  },
});

const MyDocument = (props) => (
  <Document>
    
    
    <Page size="A2"  style={styles.page}>
      
      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: '500px' }}>Ticket </Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>Theatre: {props.theatre}</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>Hall: {props.hall}</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>Date: {props.showTime}</Text>
        <View style={styles.table}>
          
          <View style={[styles.tableRow, styles.tableHeader]}>
            <View style={styles.tableCell}>
              <Text>Seats</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Total #seats</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Amount(Tk.)</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Status</Text>
            </View>
          </View>
          {/* Table Rows */}
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>A11, B12, D04</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>3</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>390(per unit 130 tk.)</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={{color: 'green'}}>Paid</Text>
            </View>
          </View>
         
        </View>
      </View>
    </Page>
  </Document>
);


function Reciept(props) {
  return(
    <PDFViewer PDFViewer style={{ width: '100%', height: '1000px' }}>
      
      {console.log("PDFVIEWER")}
      <MyDocument theatre={props.theatre} hall={props.hall} showTime={props.showTime}/>
    </PDFViewer>

  );
}

export default Reciept;