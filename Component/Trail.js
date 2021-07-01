import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        padding:'70px 0'
    },
    title: {
        fontWeight: '600',
        paddingTop: '41px'
    },
    desc: {
        color: '#252D13',
        padding: '20px 0',
        fontSize: '20px'
    },
    btn: {
        textAlign: "center",
        color: "white",
        width: '250px',
        backgroundColor: "#9ABB54",
        padding: '10px 0px',
        borderRadius: '30px',
        fontWeight:'600'
    }
})

const Trail = () => {
    const classes = useStyles()
    return ( 
        <main>
            <Typography variant="h5" className={classes.title}>
            Try BrightLocal for free
            </Typography>
            <Typography variant="body2" className={classes.desc}>
            Get started with a 14-day free trial — no card required.
            </Typography>
            <Button className={classes.btn}>
                TRY IT NOW
            </Button>
        </main>
     );
}
 
export default Trail;