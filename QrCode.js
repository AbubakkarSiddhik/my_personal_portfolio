
        function generateQRCode() {
            const text = document.getElementById("text").value;
            const qrCodeContainer = document.getElementById("qrcode");
            qrCodeContainer.innerHTML = ""; // Clear previous QR code

            if (text.trim() !== "") {
                new QRCode(qrCodeContainer, {
                    text: text,
                    width: 200,
                    height: 200
                });
            } else {
                alert("Please enter text or a URL!");
            }
        }
