import AWS from "aws-sdk";
import { useState } from "react";

function UploadImageToS3WithReactS3() {
  // Create state to store file
  const [file, setFile] = useState(null);
  const [progress , setProgress] = useState(0);
  // Function to upload file to s3
  const uploadFile = async () => {
    // S3 Bucket Name
    const S3_BUCKET = "bucketname";

    // S3 Region
    const REGION = "region";

    // S3 Credentials
    AWS.config.update({
      accessKeyId: "youracessKey",
      secretAccessKey: "yoursecretkey",
    });
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    // Files Parameters

    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    // Uploading file to s3

    var upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        // File uploading progress
        setProgress(Math.round((evt.loaded / evt.total) * 100))
      })
      .promise();

    await upload.then((err, data) => {
      console.log(err);
      // Fille successfully uploaded
      alert("File uploaded successfully.");
    });
  };
  // Function to handle file and store it to file state
  const handleFileChange = (e) => {
    // Uploaded file
    const file = e.target.files[0];
    // Changing file state
    setFile(file);
  };
  return (
    <div className="App">
      <div>
      <div>Native SDK File Upload Progress is {progress}%</div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={uploadFile}>Upload</button>
      </div>
    </div>
  );
}

export default UploadImageToS3WithReactS3;
