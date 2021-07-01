import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import side1 from '../public/images/side1.png'
import side2 from '../public/images/side2.png'
import side3 from '../public/images/side3.png'
import side4 from '../public/images/side4.png'

const useStyles = makeStyles({
    root: {
        padding: '70px 0',
        backgroundColor: '#F9FAF8'
    },
    grid: {
        padding: '30px 0'
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
        fontSize: '16px',
        fontWeight: '600'
    }
})

const DoubleSection = () => {
    const classes = useStyles()
    return (
        <main className={classes.root}>
            <Container>
                <Grid container spacing={5} className={classes.grid}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h3' className={classes.title}>
                            Monitor all your marketing data in one place
                        </Typography>
                        <Typography variant="body1" className={classes.desc}>
                            See the bigger picture with comprehensive performance dashboards, and easily connect the dots so you can react faster to issues and opportunities.
                        </Typography>
                        <Button color="primary" className={classes.btn}>
                            VIEW DEMO DASHBOARD
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image src={side1} alt='side image' />
                    </Grid>
                </Grid>
                <Grid container spacing={5} className={classes.grid}>
                    <Grid item xs={12} md={6}>
                        <Image src={side2} alt='side image' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h3' className={classes.title}>
                            Less guess work,more great work
                        </Typography>
                        <Typography variant="body1" className={classes.desc}>
                            Audit your entire online presence in a matter of minutes, zero in on quick wins, and discover what’s holding you back in local search.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={5} className={classes.grid}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h3' className={classes.title}>
                            Take action, get found, be chosen
                        </Typography>
                        <Typography variant="body1" className={classes.desc}>
                            Get to work on the reputation management tasks that will make a difference, and start getting more reviews, better rankings, and more conversions.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image src={side3} alt='side image' />
                    </Grid>
                </Grid>
                <Grid container spacing={5} className={classes.grid}>
                    <Grid item xs={12} md={6}>
                        <Image src={side4} alt='side image' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h3' className={classes.title}>
                            Report with ease and style
                        </Typography>
                        <Typography variant="body1" className={classes.desc}>
                            Claw back countless hours spent collecting data. Use customizable, automated dashboards that take away the headache of SEO reporting, and give you all the credit to boot.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}

export default DoubleSection;