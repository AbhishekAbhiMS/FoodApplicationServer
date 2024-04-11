import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import DropDown from '../../Dropdown/DropDown';
// import LoadingButton from '@mui/lab/LoadingButton';
// import SendIcon from '@mui/icons-material/Send';


export default function CardList(prop) {
  return (
    <Card sx={{ width: 280, maxWidth: '100%', boxShadow: 'lg',margin:'20px' }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={prop.img}
            srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">{prop.name}</Typography>
        <Link
          href="#product-card"
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
        >
          About {prop.name}
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          2,900 THB
        </Typography>
        <DropDown list={prop.options}></DropDown>
      </CardContent>
      <CardOverflow>
      {/* <LoadingButton
          size="small"
        //   onClick={handleClick}
          endIcon={<SendIcon />}
          loading={true}
          loadingPosition="end"
          variant="contained"
        >
          <span>Send</span>
        </LoadingButton> */}
      </CardOverflow>
    </Card>
  );
}