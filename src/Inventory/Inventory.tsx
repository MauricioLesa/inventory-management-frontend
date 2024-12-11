import { Box, Tab, Tabs } from "@mui/material"
import { useState } from "react";
import { NewItem } from "./NewItem";
import { InventoryRegistry } from "./InventoryRegisty";
import { InventroyVisualization } from "./InventoryVisualization";

export const Inventory = () => {

    const [value, setValue] = useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box className={""}>
            <Tabs
                value={value}
                className="mx-auto max-w-fit min-w-0 "
                onChange={handleChange}
                variant={"scrollable" }
                scrollButtons={"auto"}
                allowScrollButtonsMobile
            >
                <Tab label="Añadir nuevo producto" />
                <Tab label="Registro de inventarios" />
                <Tab label="Visualizar datos" />

            </Tabs>
            <div className="h-full">
                <div hidden={value !== 0}>
                    <NewItem />
                </div>
                <div hidden={value !==1}>
                    <InventoryRegistry />
                </div>
                <div hidden={value !== 2}>
                    <InventroyVisualization />
                </div>
            </div>
        </Box>
    )
}