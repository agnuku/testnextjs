
import React from 'react';
// import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 170,
        maxWidth: 300,
        fontWeight: 400,
        lineheight: 1.125,
        margin: "10px",

    },

}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = "160px";
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const regions = [
    " Australia and Oceania",
    "Asia",
    "Central America and the Caribbean",
    "North America",
    "Sub-Saharan Africa"
];
const salesOpt = [
    "Online",
    "Offline",
]
const categorychoices = [
    "Fruits",
    "Baby Food",
    "Vegetables",
    "Beverages",
    "Clothes"
]
const orPriority = [
    "A High",
    "B Medium",
    "C Low"
]
const countries = [
    "Luxembourg",
    "Sweden",
    "Ireland",
    "Malta",
    "Saudi Arabia"
]
export default function CheckBoxes() {
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };

    const handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setPersonName(value);
    };
    const [salesChannel, setSalesChannel] = React.useState([]);

    const salesHandleChange = (event) => {
        setSalesChannel(event.target.value);
    };

    const salesHandleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setSalesChannel(value);
    };

    const [category, setCategory] = React.useState([]);

    const categoryHandleChange = (event) => {
        setCategory(event.target.value);
    };

    const categoryHandleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setCategory(value);
    };

    const [orderPriority, setOrderPriority] = React.useState([]);

    const opHandleChange = (event) => {
        setOrderPriority(event.target.value);
    };

    const opHandleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setOrderPriority(value);
    };
    const [country, setCountry] = React.useState([]);

    const countryHandleChange = (event) => {
        setCountry(event.target.value);
    };

    const countryHandleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setCountry(value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-checkbox-label">Region</InputLabel>
                <Select
                    labelId="demo-mutiple-checkbox-label"
                    id="demo-mutiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<Input />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {regions.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-checkbox-label">Sales Channel</InputLabel>
                <Select
                    labelId="demo-mutiple-checkbox-label"
                    id="demo-mutiple-checkbox"
                    multiple
                    value={salesChannel}
                    onChange={salesHandleChange}
                    input={<Input />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {salesOpt.map((salesopt) => (
                        <MenuItem key={salesopt} value={salesopt}>
                            <Checkbox checked={salesChannel.indexOf(salesopt) > -1} />
                            <ListItemText primary={salesopt} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-checkbox-label">Category</InputLabel>
                <Select
                    labelId="demo-mutiple-checkbox-label"
                    id="demo-mutiple-checkbox"
                    multiple
                    value={category}
                    onChange={categoryHandleChange}
                    input={<Input />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {categorychoices.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={category.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-checkbox-label">Order Priority</InputLabel>
                <Select
                    labelId="demo-mutiple-checkbox-label"
                    id="demo-mutiple-checkbox"
                    multiple
                    value={orderPriority}
                    onChange={opHandleChange}
                    input={<Input />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {orPriority.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={orderPriority.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-checkbox-label">Country</InputLabel>
                <Select
                    labelId="demo-mutiple-checkbox-label"
                    id="demo-mutiple-checkbox"
                    multiple
                    value={country}
                    onChange={countryHandleChange}
                    input={<Input />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {countries.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={country.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
