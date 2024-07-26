import { border, borderRight, height } from "@mui/system";

const classes = {
  card: {
    display: 'flex',
    width: '300px',
    height: '180px',
    margin: '0px 4px',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#ddd',
    cursor: 'pointer',
    transitioProperty: 'transform, backgroundColor',
    transitionDuration: '0.3s',
    transitionFunction: 'ease-in-out',
    "&:hover": {
        transform: 'scale(1.05)',
        backgroundColor: 'white'
    }
  },
  imgContainer: {
    height: '100%',
  },
  img: {
    height: '100%',
    width: '100%', 
  },
  infoContainer: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column', 
  },
};
export default classes;
