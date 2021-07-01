import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/web.module.css'

const useStyles = makeStyles({
    root: {
        padding: '100px 0 30px 0',
    },
    title : {
        fontWeight: '600'
    },
    desc: {
        fontWeight: "600",
        padding: '21px 0'
    },
    btnLeft: {
        textAlign: "center",
        color: "white",
        width: '250px',
        backgroundColor: "#9ABB54",
        padding: '10px 0px',
        borderRadius: '30px'
    },
    btnRight: {
        textAlign: "center",
        color: "white",
        width: '250px',
        backgroundColor: "#B24F84",
        padding: '10px 0px',
        borderRadius: '30px'
    },
    btnName: {
        fontWeight: '600'
    },
    btnDesc: {
        fontWeight: '600'
    }
})

const Header = () => {
    const classes = useStyles()
    return (
        <main className={classes.root}>
            <Container>
                <Typography variant='h3' align='center' className={classes.title}>
                    The all-in-one platform for local search success
                </Typography>
                <Typography variant="subtitle1" align='center' className={classes.desc}>
                    Climb rankings, grow your reputation, and stand out in local search with BrightLocal.
                </Typography>
                <Grid container spacing={3} >
                    <Grid item xs={12} md={6} align='right'>
                        <div className={classes.btnLeft}>
                            <Typography className={classes.btnName}>
                                START A FREE TRAIL
                            </Typography>
                            <Typography className={classes.btnDesc}>
                                NO CARD NEEDED
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} align='left'>
                        <div className={classes.btnRight}>
                            <Typography  className={classes.btnName}>
                                BUILD CITATIONS
                            </Typography>
                            <Typography className={classes.btnDesc}>
                                Create An Account
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <main className={styles.header}>
            </main>
        </main>
    );
}

export default Header;