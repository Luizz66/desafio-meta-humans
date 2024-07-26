import { border, color, display, fontSize, fontWeight, margin, maxWidth, padding, width } from "@mui/system";

const classes = {
  img: {
    borderRadius: '8px',
  },
  categoryLabel:{
    fontSize: '1.8rem',
    fontWeight: 'bold',
    margin: '10px 0px 5px 0px'
  },
  itemInfo: (valueLength) => ({
    display: 'flex',
    flexDirection: valueLength > 100 ? 'column' : 'row',
    gap: '5px',
    alignItems: valueLength > 100 ? 'flex-start' : 'center',
    paddingLeft: '10px',
  }),
  itemLabel:{
    fontSize: '1.5rem',
    color: '#777',
  },
  itemValue:{
    fontSize: '1.5rem',
    overflowWrap: 'break-word',
    maxWidth: '800px',
    color: 'black',
  }
};
export default classes;
