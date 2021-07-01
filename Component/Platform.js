import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Trail from '../Component/Trail'

import platform1 from '../public/images/platform1.png'
import platform2 from '../public/images/platform2.png'
import platform3 from '../public/images/platform3.png'

const useStyles = makeStyles({
    root: {
        padding: '70px 0',
        textAlign: "center",
        backgroundColor:'#EBF3F3'
    },
    desc: {
        color: '#252D13',
        padding: '20px 0',
        fontSize: '20px'
    },
    span: {
        color:'#5C9FB8'
    },
    grid: {
        backgroundColor: 'white',
        padding:'20px 70px',
        borderRadious: '10px',
        border: '15px solid #EBF3F3',
        shaddow: '2px 2px 4px #000000'
    },
    name: {
        fontWeight: '600',
        padding: '15px 0'
    },
    btn: {
        fontWeight: '600',
        color: '#252D13',
    }
})

const Platform = () => {
    const classes = useStyles()
    const platforms = [
        {
            id: 1,
            img: platform1,
            name: 'Local Seo Tools',
            desc: 'Track rankings, run SEO audits, and gather insights to improve local search performance.'
        },
        {
            id: 2,
            img: platform2,
            name: 'Repotation Manager',
            desc: 'Grow, monitor, and respond to customer reviews across multiple sites in one place.'
        },
        {
            id: 3,
            img: platform3,
            name: 'Citation Builder',
            desc: 'Maximize online visibility with our citation builder and data aggregator submission services.'
        },
    ]
    return (
        <main className={classes.root}>
            <Container>
                <Typography variant='h3' >
                    Explore the BrightLocal platform
                </Typography>
                <Typography variant="body2" className={classes.desc}>
                    Take a look at each set of features below or find out <span className={classes.span}>what the whole platform offers on one page.</span>
                </Typography>
                <Grid container>
                    {
                        platforms.map(platform => (
                            <Grid key={platform.id} item xs={12} md={4} className={classes.grid}>
                                <Image src={platform.img} alt={platform.name} width={100} height={100} />
                                <Typography variant='h5' className={classes.name}>
                                    {platform.name}
                                </Typography>
                                <Typography>
                                    {platform.desc}
                                </Typography>
                                <Button className={classes.btn}>
                                    Find Out More ->
                                </Button>
                            </Grid>
                        ))
                    }
                </Grid>
                <Trail />
            </Container>
        </main>
    );
}

export default Platform;