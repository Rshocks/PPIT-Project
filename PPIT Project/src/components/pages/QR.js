import React, {useState} from 'react'
import {Fab, TextareaAutosize} from '@material-ui/core'
import QrReader from 'react-qr-scanner'
import '../../App.css';

function QR() {

    const [qrscan, setQrscan] = useState('No result');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
        }
    }
    const handleError = err => {
    console.error(err)
    }

    return (
      <div>
            <span>QR Scanner</span>
            
            <center>
            <div style={{marginTop:30}}>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 240, width: 320 }}
                />
            </div>
            </center>

            <TextareaAutosize
                style={{fontSize:18, width:320, height:100, marginTop:100}}
                rowsMax={4}
                defaultValue={qrscan}
                value={qrscan}
            />

      </div>
    );
  }
  
  export default QR;
  