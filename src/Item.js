import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography
} from "@material-ui/core";
import EditItem from "./EditItem";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
// }));

const useStyles = makeStyles({
    root: {
        maxWidth: 345,

    },
    media: {
        width: 100,
        height: 100,
    },
});

function Item(props) {

    const classes = useStyles()

    return (

         <Card className={classes.root}>
             <CardActionArea>
                 <CardMedia className={classes.media} image={props.item.image}></CardMedia>
                 <CardContent>
                     <Typography gutterBottom variant="h5" component="h2">
                         {props.item.name}
                     </Typography>

                     <Typography variant="body2" color="textSecondary" component="p">
                         {props.item.description}
                     </Typography>

                     <Typography variant="body2" color="textPrimary">
                         Price: ${props.item.price}
                     </Typography>
                 </CardContent>
             </CardActionArea>
                 <CardActions >
                     <Button size="large" color="primary"><EditItem item={props.item} editItem={props.editItem} /></Button>
                 </CardActions>


         </Card>


    )
}

export default Item