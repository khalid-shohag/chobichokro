import React from 'react';
import {Document, Page, PDFViewer, StyleSheet, Text, View, PDFDownloadLink} from '@react-pdf/renderer';
import { Button } from 'react-bootstrap';
import { TheatreDataLoading } from './TheatreDataLoading';

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


        <Page size="A2" style={styles.page}>

            <View>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: '500px'}}>Ticket </Text>
                <Text style={{fontSize: 16, marginBottom: 10}}>Theatre: {props.theatre}</Text>
                <Text style={{fontSize: 16, marginBottom: 10}}>Audience Name: {props.audience_name}</Text>
                <Text style={{fontSize: 16, marginBottom: 10}}>Movie: {props.movie}</Text>
                <Text style={{fontSize: 16, marginBottom: 10}}>Hall: {props.hall}</Text>
                <Text style={{fontSize: 16, marginBottom: 10}}>Date: {props.date}</Text>
                <Text style={{fontSize: 16, marginBottom: 10}}>Price: 100 tk. per unit</Text>
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


const Reciept = (props) => {
    const seats = props.seats.map((seat) => seat).join(', ');
    const amount = props.seats.length * 100

    return (


        // <PDFViewer PDFViewer style={{width: '100%', height: '200px'}}>
        <PDFDownloadLink
      document={
        <MyDocument
          theatre={props.theatre}
          movie={props.movie}
          date={props.date}
          hall={props.hall}
          showTime={props.showTime}
          seats={seats}
          seatNum={props.seats.length}
          amount={amount}
          audience_name = {props.audience_name}
        />
      }
      fileName="movie_ticket.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading ? (<TheatreDataLoading value={''}/>) : (<Button style={{background: '#0B6623', color: 'white', border: 'none', height: '70px', width: '170px'}}>Download Reciept</Button>)
      }
    </PDFDownloadLink>


    );
}

export default Reciept;