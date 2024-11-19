import React from 'react';
import {QRCodeCanvas} from 'qrcode.react';

const QRGenerator = ({ id }) => {

  const ip = "47.61.204.147"
  const qrUrl = `http://${ip}:3000/sitio/${id}`;

  return (
    <div>
      <h2>QR</h2>
      {/* Remove condition as ipPublica is no longer used */}
      <>
        <QRCodeCanvas value={qrUrl} />
        <p>Escanea el código QR para acceder a la página:</p>
      </>
      {console.log(qrUrl)}
    </div>
  );
};

export default QRGenerator;