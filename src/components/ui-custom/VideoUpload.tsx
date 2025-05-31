import React, { useState, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LoadingSpinner } from '@/components/ui/loading-spinner'; // Assuming this exists

interface VideoUploadProps {
  // Keep onFileSelect for now, or repurpose for when upload is successful
  onUploadSuccess: (response: { message: string; filename: string; path: string }) => void;
  className?: string;
}

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

export const VideoUpload: React.FC<VideoUploadProps> = ({ onUploadSuccess, className }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>('idle');
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus('uploading');
      setUploadError(null);

      const formData = new FormData();
      formData.append('video', file);

      try {
        const response = await fetch('http://localhost:3001/upload', {
          method: 'POST',
          body: formData,
          // Headers are not strictly necessary for FormData with fetch,
          // but if issues arise: headers: { 'Content-Type': 'multipart/form-data' }
          // (browser usually sets it correctly with boundary)
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || `Upload failed with status: ${response.status}`);
        }

        setUploadStatus('success');
        if (onUploadSuccess) {
          onUploadSuccess(result);
        }
        console.log('Upload successful:', result);

      } catch (error: any) {
        setUploadStatus('error');
        setUploadError(error.message || 'An unknown error occurred during upload.');
        console.error('Upload error:', error);
      }
    }
  };

  const handleButtonClick = () => {
    // Reset state if trying to upload a new file after a previous attempt
    if (uploadStatus === 'success' || uploadStatus === 'error') {
        setSelectedFile(null);
        setUploadStatus('idle');
        setUploadError(null);
    }
    fileInputRef.current?.click();
  };

  let statusMessage = '';
  if (selectedFile) {
    statusMessage = `Selected: ${selectedFile.name}`;
  }
  if (uploadStatus === 'uploading') {
    statusMessage = `Uploading: ${selectedFile?.name}...`;
  } else if (uploadStatus === 'success') {
    statusMessage = `Successfully uploaded: ${selectedFile?.name}!`;
  } else if (uploadStatus === 'error') {
    statusMessage = `Error uploading ${selectedFile?.name}: ${uploadError}`;
  }


  return (
    <div className={cn("flex flex-col items-center space-y-3 p-4 border border-dashed border-border rounded-lg", className)}>
      <input
        type="file"
        accept="video/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        disabled={uploadStatus === 'uploading'}
      />
      <Button
        onClick={handleButtonClick}
        variant="outline"
        disabled={uploadStatus === 'uploading'}
      >
        {uploadStatus === 'uploading' ? (
          <LoadingSpinner size="sm" className="mr-2" />
        ) : null}
        {selectedFile && uploadStatus !== 'idle' && uploadStatus !== 'uploading' ? "Upload Another Video" : (selectedFile ? "Upload Selected Video" : "Choose Video")}
      </Button>

      {statusMessage && (
        <p className={cn(
            "text-sm",
            uploadStatus === 'error' ? 'text-red-500' : 'text-muted-foreground'
        )}>
          {statusMessage}
        </p>
      )}
    </div>
  );
};
