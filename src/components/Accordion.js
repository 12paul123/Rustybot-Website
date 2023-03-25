import react, { useState } from "react";
import '../css/accordian.css'
import styled from "styled-components";

const AccordionItem = styled.div`
    width: 100%;
    background-color: #d91f32;
    margin-top: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 6px;
    padding-left: 14px;
    padding-right: 14px;

    &:hover {
        background-color: #d71629;
    }

    &[aria-expanded="false"] {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    &[aria-expanded="true"] {
        transition: border-radius 0.27s cubic-bezier(1, 0, 1, 0);
    }
`

const AccordionContent = styled.div`
    background-color: #df3232;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`

const Accordion = ({ heading, description, content, category }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div id={category}>
            <AccordionItem class="animated-item" aria-expanded={!isActive} onClick={() => setIsActive(!isActive)}>
                <div class="row">
                    <h6 class="col-md-3">{heading}</h6>
                    <h7 class="text-s col-md-9">{description}</h7>
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

export default Accordion