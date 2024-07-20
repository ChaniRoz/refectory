import * as React from 'react';
import { FormControl, Checkbox, FormControlLabel, FormGroup, FormHelperText, Accordion, AccordionSummary, AccordionDetails, Button, FormLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormattedInputs from '../payment/card';
import { useDispatch, useSelector } from 'react-redux';
import { Add, init } from '../../redux/eventSlice';

function MenuDetailsStage() {


    const eventType = init.type
    const items = useSelector((state) => state.itemSlice) || [];


    const [startState, setStartState] = React.useState({});
    const handleStartChange = (event) => {
        setStartState({
            ...startState,
            [event.target.name]: event.target.checked,
        });
    };
    const startItems = [];
    items.forEach(element => {
        if (element.itemType === 'Start Dish' && (element.eventType === eventType || element.eventType == 'Pareve')) {
            startItems.push(element)
        }
    });

    const startError = Object.values(startState).filter(v => v).length !== 3;

    const [saladsState, setSaladsState] = React.useState({});
    const handleSaladsChange = (event) => {
        setSaladsState({
            ...saladsState,
            [event.target.name]: event.target.checked,
        });
    };
    const saladsItems = [];
    items.forEach(element => {
        if (element.itemType === 'Salads' && (element.eventType === eventType || element.eventType == 'Pareve')) {
            saladsItems.push(element)
        }
    });

    const saladsError = Object.values(saladsState).filter(v => v).length !== 5;

    const [mainCourseState, setMainCourseState] = React.useState({});
    const handleMainCourseChange = (event) => {
        setMainCourseState({
            ...mainCourseState,
            [event.target.name]: event.target.checked,
        });
    };

    const mainCourseItems = [];
    items.forEach(element => {
        if (element.itemType === 'Main Course' && (element.eventType === eventType || element.eventType == 'Pareve')) {
            mainCourseItems.push(element)
        }
    });

    const mainCourseError = Object.values(mainCourseState).filter(v => v).length !== 3;

    const [extrasState, setExtrasState] = React.useState({});
    const handleExtrasChange = (event) => {
        setExtrasState({
            ...extrasState,
            [event.target.name]: event.target.checked,
        });
    };

    const extrasItems = [];
    items.forEach(element => {
        if (element.itemType === 'Extras' && (element.eventType === eventType || element.eventType == 'Pareve')) {
            extrasItems.push(element)
        }
    });

    const extrasError = Object.values(extrasState).filter(v => v).length !== 3;

    const [dessertState, setDessertState] = React.useState({});
    const handleDessertChange = (event) => {
        setDessertState({
            ...dessertState,
            [event.target.name]: event.target.checked,
        });
    };
    const dessertItems = [];
    items.forEach(element => {
        if (element.itemType === 'Dessert' && (element.eventType === eventType || element.eventType == 'Pareve')) {
            dessertItems.push(element)
        }
    });

    const dessertError = Object.values(dessertState).filter(v => v).length !== 1;

    const [showPaymentStage, setShowPaymentStage] = React.useState(false);
    const [showPrev, setShowPrev] = React.useState(false);
    const dispatch = useDispatch();

    const handleSaveAndNext = () => {
        dispatch(Add(init));
        //save menu
        setShowPaymentStage(true);
    };

    const handlePrev = () => {
        setShowPrev(true);
    };


    return (
        <div>
            {!showPaymentStage && !showPrev && (
                <FormControl component="fieldset" sx={{ m: 3 }} variant="standard">
                    <FormLabel id="type">Select Menu</FormLabel>
                    <FormControlLabel id="drink" control={<Checkbox defaultChecked />} label="Drink (Spring)" />

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content">
                            Starter Dish
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormControl required error={startError}>
                                <FormHelperText>You have to pick 3</FormHelperText>
                                {/* <FormControlLabel control={
                                    <Checkbox checked={fried_eggplants} onChange={handleSaladsChange} name="fried_eggplants" />
                                    } label="fried eggplants" /> */}

                                <FormGroup>

                                    {startItems.map(item => (
                                        <FormControlLabel
                                            key={item.name}
                                            control={
                                                <Checkbox
                                                    checked={startState[item.name] || false}
                                                    onChange={handleStartChange}
                                                    name={item.name}
                                                />
                                            }
                                            label={item.name}
                                        />
                                    ))}
                                </FormGroup>
                            </FormControl>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content">
                            Salads
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormControl required error={saladsError}>
                                <FormHelperText>You have to pick 5</FormHelperText>
                                <FormGroup>
                                    {saladsItems.map(item => (
                                        <FormControlLabel
                                            key={item.name}
                                            control={
                                                <Checkbox
                                                    checked={saladsState[item.name] || false}
                                                    onChange={handleSaladsChange}
                                                    name={item.name}
                                                />
                                            }
                                            label={item.name}
                                        />
                                    ))}
                                </FormGroup>
                            </FormControl>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content">
                            Main Course
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormControl required error={mainCourseError}>
                                <FormHelperText>You have to pick 3</FormHelperText>
                                <FormGroup>
                                    {mainCourseItems.map(item => (
                                        <FormControlLabel
                                            key={item.name}
                                            control={
                                                <Checkbox
                                                    checked={mainCourseState[item.name] || false}
                                                    onChange={handleMainCourseChange}
                                                    name={item.name}
                                                />
                                            }
                                            label={item.name}
                                        />
                                    ))}
                                </FormGroup>
                            </FormControl>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4-content">
                            Extras
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormControl required error={extrasError}>
                                <FormHelperText>You have to pick 3</FormHelperText>
                                <FormGroup>
                                    {extrasItems.map(item => (
                                        <FormControlLabel
                                            key={item.name}
                                            control={
                                                <Checkbox
                                                    checked={extrasState[item.name] || false}
                                                    onChange={handleExtrasChange}
                                                    name={item.name}
                                                />
                                            }
                                            label={item.name}
                                        />
                                    ))}
                                </FormGroup>
                            </FormControl>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5-content">
                            Dessert
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormControl required error={dessertError}>
                                <FormHelperText>You have to pick 1</FormHelperText>
                                <FormGroup>
                                    {dessertItems.map(item => (
                                        <FormControlLabel
                                            key={item.name}
                                            control={
                                                <Checkbox
                                                    checked={dessertState[item.name] || false}
                                                    onChange={handleDessertChange}
                                                    name={item.name}
                                                />
                                            }
                                            label={item.name}
                                        />
                                    ))}
                                </FormGroup>
                            </FormControl>
                        </AccordionDetails>
                    </Accordion>

                    <Button variant="contained" onClick={handlePrev} sx={{ mt: 2 }}>
                        Previous
                    </Button>
                    <Button variant="contained" onClick={handleSaveAndNext} sx={{ mt: 2, ml: 2 }} disabled={startError || saladsError || mainCourseError || extrasError || dessertError}>
                        Save and Next
                    </Button>
                </FormControl>
            )}
            {showPaymentStage && <FormattedInputs />}
        </div>
    );
}

export default MenuDetailsStage;
