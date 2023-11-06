"use client";

import React, { useState } from "react";
import styles from "../../styles/OmochiSection.module.css";

type OmochiSectionProps = {
    seqmode: string;
    sequenceData: boolean[][];
};

type GridCell = {
    cell: boolean;
    tone: string;
    octave: string;
};


const emptySymbol: string = "∅";
const includedSymbol: string = "♪";

const OmochiSection: React.FC<OmochiSectionProps> = ({ seqmode, sequenceData }) => {
    const [grid, setGrid] = useState<GridCell[][]>(
        Array.from({ length: 4 }, () =>
            Array.from({ length: 4 }, () => ({
                cell: false,
                tone: 'C',
                octave: '3',
            }))
        )
    );

    const handleCellClick = (rowIndex: number, columnIndex: number) => {
        const updatedGrid = grid.map((row, rIndex) =>
            row.map((cell, cIndex) => {
                if (rIndex === rowIndex && cIndex === columnIndex) {
                    return { ...cell, cell: !cell.cell };
                }
                return cell;
            })
        );
        setGrid(updatedGrid);
    };

    const handleInputChange = (
        rowIndex: number,
        columnIndex: number,
        property: "tone" | "octave",
        value: string
    ) => {
        const updatedGrid = grid.map((row, rIndex) =>
            row.map((cell, cIndex) => {
                if (rIndex === rowIndex && cIndex === columnIndex) {
                    return { ...cell, [property]: value };
                }
                return cell;
            })
        );
        setGrid(updatedGrid);
    };

    return (
        <div className={styles.centeredGrid}>
            <div className={styles.gridContainer}>
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className={styles.gridRow}>
                        {row.map((cell, columnIndex) => (
                            <div key={columnIndex} className={styles.gridColumn}>
                                <button
                                    onClick={() => handleCellClick(rowIndex, columnIndex)}
                                    className={cell.cell ? styles.buttonActive : styles.buttonInactive}
                                >
                                    <select
                                        value={cell.tone}
                                        onChange={(e) => handleInputChange(rowIndex, columnIndex, "tone", e.target.value)}
                                    >
                                        <option value="C">C</option>
                                        <option value="C#">C#</option>
                                        <option value="D">D</option>
                                        <option value="D#">D#</option>
                                        <option value="E">E</option>
                                        <option value="F">F</option>
                                        <option value="F#">F#</option>
                                        <option value="G">G</option>
                                        <option value="G#">G#</option>
                                        <option value="A">A</option>
                                        <option value="A#">A#</option>
                                        <option value="B">B</option>
                                    </select>
                                    <select
                                        value={cell.octave}
                                        onChange={(e) => handleInputChange(rowIndex, columnIndex, "octave", e.target.value)}
                                    >
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                    </select>
                                    {cell.cell ? includedSymbol : emptySymbol}
                                </button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OmochiSection;
