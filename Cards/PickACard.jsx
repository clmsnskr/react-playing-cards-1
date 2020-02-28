import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography
} from '@material-ui/core';
import {
    Base,
    Rank,
    Suit
} from './graphics'

const useStyles = makeStyles(theme => ({

    cardContainer: {
        margin: 'auto',
        position: 'relative',
        textAlign: 'center',  
        width: 200
    },
    cardWrap:{
        position: 'absolute',
        width: 200
    },
    base: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 50,
    },
    rank: {
        position: 'absolute',
        left: 20,
        top: 20,
        zIndex: 100,
        width: 60,

    },
    suit: {
        position: 'absolute',
        top: 8,
        right: 5,
        zIndex: 150,
        width: 120,
    },



    boSelecta: {
        margin: theme.spacing(2),
        textAlign: 'center'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const makeCard = (card) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Suit card={card} className={classes.suit} />
            <Rank card={card} className={classes.rank} />
            <Base card={card} className={classes.base} />
        </React.Fragment>
    );
}

export default function PickACard() {
    const classes = useStyles();
    const [suit, setSuit] = React.useState('S'); // S=Spades, D=Diamonds, H=Hearts, C=Clubs
    const [rank, setRank] = React.useState('A');

    return (
        <React.Fragment>

            <div className={classes.boSelecta}>
                <Typography variant={`h6`}>
                    Pick a card, any card...
                </Typography>
                <FormControl className={classes.formControl} >
                    <InputLabel id="rank-label">Rank</InputLabel>
                    <Select
                        labelId="rank-label"
                        id="rank-select"
                        value={rank}
                        onChange={(e) => {
                            setRank(e.target.value);
                        }}>
                        <MenuItem value={`A`}>Ace</MenuItem>
                        <MenuItem value={`K`}>King</MenuItem>
                        <MenuItem value={`Q`}>Queen</MenuItem>
                        <MenuItem value={`J`}>Jack</MenuItem>
                        <MenuItem value={`10`}>10</MenuItem>
                        <MenuItem value={`9`}>9</MenuItem>
                        <MenuItem value={`8`}>8</MenuItem>
                        <MenuItem value={`7`}>7</MenuItem>
                        <MenuItem value={`6`}>6</MenuItem>
                        <MenuItem value={`5`}>5</MenuItem>
                        <MenuItem value={`4`}>4</MenuItem>
                        <MenuItem value={`3`}>3</MenuItem>
                        <MenuItem value={`2`}>2</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl} >
                    <InputLabel id="suit-label">Suit</InputLabel>
                    <Select
                        labelId="suit-label"
                        id="suit-select"
                        value={suit}
                        onChange={(e) => {
                            setSuit(e.target.value);
                        }}>
                        <MenuItem value={`S`}>Spades</MenuItem>
                        <MenuItem value={`D`}>Diamonds</MenuItem>
                        <MenuItem value={`C`}>Clubs</MenuItem>
                        <MenuItem value={`H`}>Hearts</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className={classes.cardContainer}>
                <div className={classes.cardWrap}>
                {makeCard({
                    color: `#212121`,
                    suit,
                    rank,
                })}
                </div>
            </div>

        </React.Fragment>
    );
}


/*
<Typography variant={`h6`}>
                Pick a card, any card
            </Typography>


*/