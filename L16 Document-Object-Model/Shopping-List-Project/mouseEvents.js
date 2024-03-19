const logo = document.querySelector('img');

const onClick = () => console.log('Click Event');

const onDoubleClick = () => {
  let backgroundColor = document.body.style.backgroundColor;
  backgroundColor = backgroundColor.length ? '' : 'purple';
  document.body.style.backgroundColor = backgroundColor;
};

const onRightClick = () => {
  console.log('Right click Event');
};
const onMouseDown = () => {
  console.log('Mouse Down Event');
};
const onMouseUp = () => {
  console.log('Mouse Up Event');
};
const onMouseWheel = () => {
  console.log('Mouse Wheel Event');
};
const onMouseOver = () => {
  console.log('Mouse Over Event');
};
const onMouseOut = () => {
  console.log('Mouse Out Event');
};
const onMouseEnter = () => {
  console.log('Mouse Enter Event');
};
const onMouseLeave = () => {
  console.log('Mouse Leave Event');
};
const onDragStart = () => {
  console.log('Drag Start Event');
};
const onDrag = () => {
  console.log('Drag Event');
};
const onDragEnd = () => {
  console.log('Drag End Event');
};

// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick); // opens up the context menu on right click.
logo.addEventListener('mousedown', onMouseDown); // clicking and holding it, is mouse down event.
logo.addEventListener('mouseup', onMouseUp); // releasing the mouse after doing mouse down.
logo.addEventListener('wheel', onMouseWheel); // Putting the cursor on the elemnt, and do the scrolling will fire this event.
logo.addEventListener('mouseover', onMouseOver); // This event gets fired when the cursor is on the element(hover).
logo.addEventListener('mouseout', onMouseOut); // This event gets fired when the cursor is moved out of the element after doing mouse over.
// Mouseenter and mouseleave do not react to event bubbling, while mouseover and mouseout do.
/**
 * The mouseover event triggers when the mouse pointer enters
 * the div element, and its child elements. The mouseenter
 * event is only triggered when the mouse pointer enters the
 * div element.
 */
logo.addEventListener('mouseenter', onMouseEnter);
logo.addEventListener('mouseleave', onMouseLeave);
logo.addEventListener('dragstart', onDragStart); // This event will get fired(once only), when the element is clicked, hold and then dragged somewhere in the window.
logo.addEventListener('drag', onDrag); // This will keep firing, until the element is dragged away it's original position.
logo.addEventListener('dragend', onDragEnd); // Will get fired right after the element is let go after dragging.
