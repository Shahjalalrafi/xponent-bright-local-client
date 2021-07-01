import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import detailsicon1 from '../public/images/detailsicon1.png'
import detailsicon2 from '../public/images/detailsicon2.png'
import detailsicon3 from '../public/images/detailsicon3.png'
import detailsman1 from '../public/images/detailsman1.png'
import detailsman2 from '../public/images/detailsman2.png'
import detailsman3 from '../public/images/detailsman3.png'

const useStyles = makeStyles({
    root: {
        padding: '70px 0',
        textAlign: 'center',
        backgroundColor: '#F9FAF8'
    },
    Title: {
        fontWeight: '600',
        paddingBottom: '30px'
    },
    grid: {
        background: 'white',
        padding: '30px 20px',
        border: '15px solid #F9FAF8'
    },
    title: {
        fontWeight: '600',
        padding: '20px 0'
    },
    desc: {
        padding: '20px 0'
    },
    greet: {
        fontStyle: 'italic',
         padding: '10px 0'
    },
    name: {
        fontWeight: '600',
        padding: '20px 0'
    }
})

const Details = () => {
    const classes = useStyles()
    const details = [
        {
            id:1,
            icon: detailsicon1,
            title: 'Awesome for agencies',
            desc:'With white-label client reporting and lead generation features developed specifically for agencies, it’s your secret weapon for client satisfaction.',
            greet: '“I would and do recommend BrightLocal… having them on your side is like having a full-time local SEO staff.”',
            name: 'Casey Meraz, Juris Digital',
            img: detailsman1
        },
        {
            id:2,
            icon: detailsicon2,
            title: 'Superb at scale',
            desc:'Flexible pricing, aggregate reports and a dedicated enterprise team take the stress out of managing multiple locations at once, whether it’s 100 or 1,000.',
            greet: '“BrightLocal has given us the ability to improve the brand awareness and visibility for our locations.”',
            name: 'Foad Izadi, Kumon',
            img: detailsman2
        },
        {
            id:3,
            icon: detailsicon3,
            title: 'Loved by local businesses',
            desc:'Getting clear, actionable insights from easy-to-use reports means that smaller businesses can take giant leaps soon after subscribing.',
            greet: '“This service is perfect for a small business that wants to do it themselves. Love it!”',
            name: 'Evgeny Schupak, Royal Auto Finish',
            img: detailsman3
        },
    ]
    return (
        <main className={classes.root}>
            <Container>
                <Typography variant="h4" className={classes.Title}>
                    BrightLocal is...
                </Typography>
                <Grid container>
                    {
                        details.map(detail => (
                            <Grid key={detail.id} item xs={12} md={4} className={classes.grid}>
                                <Image src={detail.icon} alt={detail.title} height={80} width={80} />
                                <Typography variant="h5" className={classes.title}>
                                    {detail.title}
                                </Typography>
                                <Typography variant="body1" className={classes.desc}>
                                    {detail.desc}
                                </Typography>
                                <Typography variant="subtitle2" className={classes.greet}>
                                    {detail.greet}
                                </Typography>
                                <Typography variant="h6" className={classes.name}>
                                    {detail.name}
                                </Typography>
                                <Image src={detail.img} alt={detail.name} height={150} width={150} />
                                {/* <Button  className={classes.btn}>
                                    FIND OUT MORE
                                </Button> */}
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </main>
    );
}

export default Details;