
import React, { useEffect } from 'react';
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
        <Text style={{ fontSize: 16, marginBottom: 10 }}>Movie: {props.movie}</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>Hall: {props.hall}</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>Date: {props.date}</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>Price: 100 tk. per unit</Text>
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
              <Text>{props.seats}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{props.seatNum}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{props.amount}</Text>
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
  const seats = props.seats.map((seat) => seat).join(', ');
  const amount = props.seats.length * 100

  return(
   

    <PDFViewer PDFViewer style={{ width: '100%', height: '200px' }}>
      
      {console.log("PDFVIEWER")}
      <MyDocument theatre={props.theatre} movie={props.movie} date={props.date} hall={props.hall} showTime={props.showTime} seats={seats} seatNum={props.seats.length} amount={amount}/>
    </PDFViewer>
    
  );
}

export default Reciept;