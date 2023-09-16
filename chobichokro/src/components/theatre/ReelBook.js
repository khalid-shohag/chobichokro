import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { CardBody } from "reactstrap";
import lightImg from '../../assets/light.gif'
import axios from "axios";
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import recieptBG from '..//../assets/reciept_bg.webp'

export function ReelBook() {

    const [company, setCompany] = useState('')
    const [transaction, setTransaction] = useState('')
    const [theatre, setTheatre] = useState('')
    const [address, setAddress] = useState('')
    const [receipt, getReceipt] = useState(false)

    const sendBookingInfo = async () => {

        const formData = new FormData()
        formData.append('companyName', company)
        formData.append('transactionNumber', transaction)
        formData.append('theatreName', theatre)
        formData.append('address', address)

        try {
            const response = await axios.post('http://localhost:8080/api/movies/upcoming/booking', 
            formData);
            console.log(response.data)
            // getReceipt(true)

        } catch(error) {
            console.log("Error: ", error)
            getReceipt(true)
        }
    }

    return(
        <div >
           
            <Card style={{height: '400px', width: '400px', backgroundColor: 'aqua', borderRadius: '10px'}}>
            
                <CardBody>
                    
                    <h4>Reel Booking info.</h4>
                    <div style={{marginTop: '10px', marginBottom: '10px' }}>
                        <label htmlFor="Name" style={{color: '#2A925E'}}>Distributor Company:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            style={{ width: '100%', height: "50px", borderRadius: '15px'  }}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>
                    <div style={{marginTop: '10px', marginBottom: '10px' }}>
                        <label htmlFor="transaction" style={{color: '#2A925E'}}>Transactoin no:</label>
                        <input
                            type="text"
                            id="tran"
                            name="tran"
                            style={{ width: '100%', height: "50px", borderRadius: '15px'  }}
                            onChange={(e) => setTransaction(e.target.value)}
                        />
                    </div>
                    <div style={{marginTop: '10px', marginBottom: '10px' }}>
                        <label htmlFor="theatre" style={{color: '#2A925E'}}>Theatre Name:</label>
                        <input
                            type="text"
                            id="theatre"
                            name="theatre"
                            style={{ width: '100%', height: "50px", borderRadius: '15px'  }}
                            onChange={(e) => setTransaction(e.target.value)}
                        />
                    </div>
                    <div style={{marginTop: '10px', marginBottom: '10px' }}>
                        <label htmlFor="address" style={{color: '#2A925E'}}>Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            style={{ width: '100%', height: "50px", borderRadius: '15px'  }}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <button style={{backgroundColor: 'gold', marginLeft: '170px'}}
                        onClick={sendBookingInfo}>Book</button>
                    </div>
                </CardBody>
            </Card>
            {receipt && (
                <div>
                    <Reciept />
                </div>
            )}
        </div>
    );
}




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
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: '500px' }}>Reel Booking info.</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>Distributor: {props.distributor}</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>Address: {props.address}</Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>Date: {new Date().getFullYear}</Text>
        
        <View style={styles.table}>
          
          <View style={[styles.tableRow, styles.tableHeader]}>
            <View style={styles.tableCell}>
              <Text>Theatre</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Transaction</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Amount(Tk.)</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Address</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Status</Text>
            </View>
          </View>
          {/* Table Rows */}
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>{props.theatre}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{props.transaction}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{props.amount}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{props.post}</Text>
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


function Reciept() {
//   const seats = props.seats.map((seat) => seat).join(', ');
//   const amount = props.seats.length * 130
  return(
    <PDFViewer PDFViewer style={{ width: '100%', height: '1000px' }}>
      
      {console.log("PDFVIEWER")}
      <MyDocument distributor={"ABC Films"} address={"Bannani, Dhaka"} theatre={"Star cineplex"} transaction={"5655688"}  amount={'50000'} post={"Rajshahi"}/>
    </PDFViewer>

  );
}

export default Reciept;