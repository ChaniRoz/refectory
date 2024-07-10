import * as React from 'react';
import { FormControl, Checkbox, FormControlLabel, FormGroup, FormHelperText, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MenuDetailsStage() {
    //Start Dish
    const [startState, setStartState] = React.useState({
        kugel_potato: false, kugel_noodles: false, salmon_fish: false, tilapia_fillet_fish: false, vegetable_borax: false, blinches: false
    });

    const handleStartChange = (event) => {
        setStartState({
            ...startState,
            [event.target.name]: event.target.checked,
        });
    };

    const { kugel_potato, kugel_noodles, salmon_fish, tilapia_fillet_fish, vegetable_borax, blinches } = startState;
    const startError = [kugel_potato, kugel_noodles, salmon_fish, tilapia_fillet_fish, vegetable_borax, blinches].filter((v) => v).length !== 3;
    //Salads
    const [saladsState, setSaladsState] = React.useState({
        fried_eggplants: false, eggplants_in_mayonnaise: false, grinding: false, chickpeas: false, pickles: false, beetroot: false, raw_vegetables: false, lettuce: false, coleslaw: false, carrot: false, tomatoes: false, cranberry_purple_cabbage: false, white_cabbage: false
    });

    const handleSaladsChange = (event) => {
        setSaladsState({
            ...saladsState,
            [event.target.name]: event.target.checked,
        });
    };

    const { fried_eggplants, eggplants_in_mayonnaise, grinding, chickpeas, pickles, beetroot, raw_vegetables, lettuce, coleslaw, carrot, tomatoes, cranberry_purple_cabbage, white_cabbage } = saladsState;
    const saladsError = [fried_eggplants, eggplants_in_mayonnaise, grinding, chickpeas, pickles, beetroot, raw_vegetables, lettuce, coleslaw, , carrot, tomatoes, cranberry_purple_cabbage, white_cabbage].filter((v) => v).length !== 5;
    //Main Course
    const [mainCourseState, setMainCoursState] = React.useState({
        chicken_steak: false, schnitzel: false, meat: false, turkey_roll: false
    });

    const handleMainCourseChange = (event) => {
        setMainCoursState({
            ...mainCourseState,
            [event.target.name]: event.target.checked,
        });
    };

    const { chicken_steak, schnitzel, meat, turkey_roll } = mainCourseState;
    const mainCourseError = [chicken_steak, schnitzel, meat, turkey_roll].filter((v) => v).length !== 3;
    //Extras
    const [extrasState, setExtrasState] = React.useState({
        rice: false, rice_with_vegetables: false, baked_potato: false, potato_and_sweet_potato: false, beans_in_sauce: false, tsimas: false
    });

    const handleExtrasChange = (event) => {
        setExtrasState({
            ...extrasState,
            [event.target.name]: event.target.checked,
        });
    };

    const { rice, rice_with_vegetables, baked_potato, potato_and_sweet_potato, beans_in_sauce, tsimas } = extrasState;
    const extrasError = [rice, rice_with_vegetables, baked_potato, potato_and_sweet_potato, beans_in_sauce, tsimas].filter((v) => v).length !== 3;
    //Dessert
    const [dessertState, setDessertState] = React.useState({
        pie_plate: false, ice_cream: false, mousse: false, soufflé: false
    });

    const handleDessertChange = (event) => {
        setDessertState({
            ...dessertState,
            [event.target.name]: event.target.checked,
        });
    };

    const { pie_plate, ice_cream, mousse, soufflé } = dessertState;
    const dessertError = [pie_plate, ice_cream, mousse, soufflé].filter((v) => v).length !== 1;
    return (
        <FormControl component="fieldset"
            sx={{ m: 3 }}
            variant="standard">
            <FormControlLabel id="drink" control={<Checkbox defaultChecked />} label="Drink (Spring)" />
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                >
                    Starter Dish
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl
                        required
                        error={startError}
                    >
                        <FormHelperText>You have to pick 3</FormHelperText>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={kugel_potato} onChange={handleStartChange} name="kugel_potato" />} label="kugel potato" />
                            <FormControlLabel control={<Checkbox checked={kugel_noodles} onChange={handleStartChange} name="kugel_noodles" />} label="kugel noodles" />
                            <FormControlLabel control={<Checkbox checked={salmon_fish} onChange={handleStartChange} name="salmon_fish" />} label="salmon fish" />
                            <FormControlLabel control={<Checkbox checked={tilapia_fillet_fish} onChange={handleStartChange} name="tilapia_fillet_fish" />} label="tilapia fillet fish" />
                            <FormControlLabel control={<Checkbox checked={vegetable_borax} onChange={handleStartChange} name="vegetable_borax" />} label="vegetable borax" />
                            <FormControlLabel control={<Checkbox checked={blinches} onChange={handleStartChange} name="blinches" />} label="blinches" />
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                >
                    Salads
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl
                        required
                        error={saladsError}
                    >
                        <FormHelperText>You have to pick 5</FormHelperText>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={fried_eggplants} onChange={handleSaladsChange} name="fried_eggplants" />} label="fried eggplants" />
                            <FormControlLabel control={<Checkbox checked={eggplants_in_mayonnaise} onChange={handleSaladsChange} name="eggplants_in_mayonnaise" />} label="eggplants in mayonnaise" />
                            <FormControlLabel control={<Checkbox checked={grinding} onChange={handleSaladsChange} name="grinding" />} label="grinding" />
                            <FormControlLabel control={<Checkbox checked={chickpeas} onChange={handleSaladsChange} name="chickpeas" />} label="chickpeas" />
                            <FormControlLabel control={<Checkbox checked={pickles} onChange={handleSaladsChange} name="pickles" />} label="pickles" />
                            <FormControlLabel control={<Checkbox checked={beetroot} onChange={handleSaladsChange} name="beetroot" />} label="beetroot" />
                            <FormControlLabel control={<Checkbox checked={raw_vegetables} onChange={handleSaladsChange} name="raw_vegetables" />} label="raw vegetables" />
                            <FormControlLabel control={<Checkbox checked={lettuce} onChange={handleSaladsChange} name="lettuce" />} label="lettuce" />
                            <FormControlLabel control={<Checkbox checked={coleslaw} onChange={handleSaladsChange} name="coleslaw" />} label="coleslaw" />
                            <FormControlLabel control={<Checkbox checked={carrot} onChange={handleSaladsChange} name="carrot" />} label="carrot" />
                            <FormControlLabel control={<Checkbox checked={tomatoes} onChange={handleSaladsChange} name="tomatoes" />} label="tomatoes" />
                            <FormControlLabel control={<Checkbox checked={cranberry_purple_cabbage} onChange={handleSaladsChange} name="cranberry_purple_cabbage" />} label="cranberry purple cabbage" />
                            <FormControlLabel control={<Checkbox checked={white_cabbage} onChange={handleSaladsChange} name="white_cabbage" />} label="white cabbage" />
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                >
                    Main Course
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl
                        required
                        error={mainCourseError}
                    >
                        <FormHelperText>You have to pick 3</FormHelperText>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={chicken_steak} onChange={handleMainCourseChange} name="chicken_steak" />} label="chicken steak" />
                            <FormControlLabel control={<Checkbox checked={schnitzel} onChange={handleMainCourseChange} name="schnitzel" />} label="schnitzel" />
                            <FormControlLabel control={<Checkbox checked={meat} onChange={handleMainCourseChange} name="meat" />} label="meat" />
                            <FormControlLabel control={<Checkbox checked={turkey_roll} onChange={handleMainCourseChange} name="turkey_roll" />} label="turkey roll" />
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                >
                    Extras
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl
                        required
                        error={extrasError}
                    >
                        <FormHelperText>You have to pick 3</FormHelperText>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={rice} onChange={handleExtrasChange} name="rice" />} label="rice" />
                            <FormControlLabel control={<Checkbox checked={rice_with_vegetables} onChange={handleExtrasChange} name="rice_with_vegetables" />} label="rice with vegetables" />
                            <FormControlLabel control={<Checkbox checked={baked_potato} onChange={handleExtrasChange} name="baked_potato" />} label="baked potato" />
                            <FormControlLabel control={<Checkbox checked={potato_and_sweet_potato} onChange={handleExtrasChange} name="potato_and_sweet_potato" />} label="potato and sweet potato" />
                            <FormControlLabel control={<Checkbox checked={beans_in_sauce} onChange={handleExtrasChange} name="beans_in_sauce" />} label="beans in sauce" />
                            <FormControlLabel control={<Checkbox checked={tsimas} onChange={handleExtrasChange} name="tsimas" />} label="tsimas" />
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                >
                    Dessert
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl
                        required
                        error={dessertError}
                    >
                        <FormHelperText>You have to pick 1</FormHelperText>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={pie_plate} onChange={handleDessertChange} name="pie_plate" />} label="pie plate" />
                            <FormControlLabel control={<Checkbox checked={ice_cream} onChange={handleDessertChange} name="ice_cream" />} label="ice cream" />
                            <FormControlLabel control={<Checkbox checked={mousse} onChange={handleDessertChange} name="mousse" />} label="mousse" />
                            <FormControlLabel control={<Checkbox checked={soufflé} onChange={handleDessertChange} name="soufflé" />} label="soufflé" />
                        </FormGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>

            <Button variant="contained" color="secondary" >Previous</Button>
            <Button variant="contained" color="primary">For payment</Button>
        </FormControl>
    );
}
export default MenuDetailsStage;