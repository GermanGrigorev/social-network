import TestRenderer from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";
import React from "react";


test("sss", () => {
    const component = TestRenderer.create(<ProfileStatus />);
    const root = component.root;
    const span = root.findByType('span');
    expect(span.props.children).toBe('How are you doing?');
})
