import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function CompanyImageList({images}) {
  
  return (
    <ImageList sx={{ width: '100%', height: 450 }} cols={3} rowHeight={164}>
      {images?.map((item) => (
        <ImageListItem key={item}>
          <img
            // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={item.urls.regular}
            // alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
