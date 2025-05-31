const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// CORS configuration
app.use(cors());

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    // Sanitize filename if necessary, or use a unique ID
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB limit
  fileFilter: function (req, file, cb) {
    // Basic video file type check (can be expanded)
    if (file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only video files are allowed!'), false);
    }
  }
});

// POST endpoint for video uploads
app.post('/upload', upload.single('video'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'No file uploaded.' });
  }
  res.send({
    message: 'File uploaded successfully.',
    filename: req.file.filename,
    path: `/videos/${req.file.filename}` // Path to access the video
  });
}, (error, req, res, next) => {
  // Global error handler for multer errors
  if (error instanceof multer.MulterError) {
    return res.status(400).send({ message: `Multer error: ${error.message}` });
  } else if (error) {
    return res.status(400).send({ message: `File upload error: ${error.message}` });
  }
  next();
});

// GET endpoint to serve uploaded videos
app.use('/videos', express.static(uploadsDir));

// Placeholder for AI processing endpoint
app.post('/process/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(uploadsDir, filename);

    if (!fs.existsSync(filePath)) {
        return res.status(404).send({ message: 'File not found.' });
    }

    // Simulate AI processing
    console.log(`Simulating AI processing for ${filename}...`);
    setTimeout(() => {
        console.log(`AI processing for ${filename} complete.`);
        // For now, just return the original file path as if it were processed
        res.send({
            message: 'Video processing complete (simulated).',
            processedFilename: filename, // In reality, this might be a new filename
            path: `/videos/${filename}`
        });
    }, 5000); // Simulate 5 seconds of processing
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
