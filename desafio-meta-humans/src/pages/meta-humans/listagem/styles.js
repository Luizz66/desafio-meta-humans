import { display, height, margin, padding, width } from "@mui/system";

const classes = {
  container: {
    backgroundColor: 'black',
    height: '100vh',
    overflowY: 'auto',
  },
  titleContainer:{
    backgroundColor: 'white',
  },
  actionsContainer:{
    padding: '10px 20px',
    backgroundColor: '#eee',
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
    justifyContent: 'space-between',
  },
  listContainer: {
    justifyContent: 'center',
    width: '100%',
    padding: '20px 0',
  }
};
export default classes;
