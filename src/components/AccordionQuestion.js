import react, { useState } from "react";
import '../css/accordian.css'
import styled from "styled-components";

const AccordionItem = styled.div`
    width: 100%;
    background-color: #d91f32;
    margin-top: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 14px;
    padding-right: 14px;

    &:hover {
        background-color: #d71629;
    }
`

const AccordionContent = styled.div`
    background-color: #df3232;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
    padding-top: 10px;
    padding-bottom: 10px;
`

const AccordionQuestion = ({ title, content}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <AccordionItem class="animated-item" aria-expanded={!isActive} onClick={() => setIsActive(!isActive)}>
                <div class="d-flex flex-row justify-content-between">
                    <h6>{title}</h6>
                    {!isActive ?
                    <i class="bi bi-plus-lg"></i> :
                    <i class="bi bi-dash-lg"></i>}
                </div>
            </AccordionItem>
            <div class="animated-container" aria-expanded={!isActive}>
                <AccordionContent>
                    {content}
                </AccordionContent>
            </div>
        </div>
    )
}

export default AccordionQuestion