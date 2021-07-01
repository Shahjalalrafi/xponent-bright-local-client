import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import side1 from '../public/images/side1.png'

const DoubleSection = () => {
    return ( 
        <main>
            <Container>
                <Grid container spacing ={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h3'>
                        Monitor all your marketing data in one place
                        </Typography>
                        <Typography variant="body2">
                        See the bigger picture with comprehensive performance dashboards, and easily connect the dots so you can react faster to issues and opportunities.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image src={side1} alt='side image'  />
                    </Grid>
                </Grid>
            </Container>
        </main>
     );
}
 
export default DoubleSection;