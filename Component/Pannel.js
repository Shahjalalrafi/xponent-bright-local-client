import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SanityClient from '../client'

import pannel1 from '../public/images/pannel1.png'
import pannel2 from '../public/images/pannel2.png'
import pannel3 from '../public/images/pannel3.png'

const useStyles = makeStyles({
    root: {
        padding: '70px 0 20px 0',
        backgroundColor: '#F9FAF8'
    },
    grid: {
        padding: '25px'
    },
    title: {
        fontWeight: '600',
        padding: '20px 0'
    },
    desc: {
        fontSize: '15px'
    }
})

const Pannel = () => {

    const classes = useStyles()
    const pannels = [
        {
            id: 1,
            img: pannel1,
            title: `All local, all the time`,
            desc: 'BrightLocal is 100% focused on local marketing, so you’ll find value in every corner of every feature.'
        },
        {
            id: 2,
            img: pannel2,
            title: `Time equals money, why not save both?`,
            desc: 'All the tools you need, all within easy reach, and all at a cost-effective price that makes local search success affordable for everyone.'
        },
        {
            id: 3,
            img: pannel3,
            title: `Powered by people`,
            desc: 'Our dedicated team of local search pros and five-star support staff know what’s up in local SEO and are on hand to help you win.'
        },
    ]

    console.log(pannels)
    return (
        <main className={classes.root}>
            <Container>
                <Grid container align="center">
                    {
                        pannels.map(pannel => (
                            <Grid key={pannel.id} item xs={6} md={4} className={classes.grid}>
                                <Image src={pannel.img} alt={pannel.title}  className={classes.img} width={180} height={120} />
                                <Typography variant="h5" className={classes.title}>
                                    {pannel.title}
                                </Typography>
                                <Typography variant="body2" className={classes.desc}>
                                    {pannel.desc}
                                </Typography>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </main>
    );
}

export default Pannel;