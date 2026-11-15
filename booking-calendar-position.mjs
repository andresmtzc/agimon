// Position the appointment popover against its event, within the calendar body.
export function appointmentPosition({ event, card, bounds, rtl=false, gap=12, padding=10 }) {
  const clamp=(value,min,max)=>Math.max(min,Math.min(value,Math.max(min,max)));
  const left=event.left-card.width-gap;
  const right=event.right+gap;
  const sides=rtl?['right','left']:['left','right'];
  for(const side of sides){
    const x=side==='left'?left:right;
    if(x>=padding&&x+card.width<=bounds.width-padding){
      return {x,y:clamp(event.top,padding,bounds.height-card.height-padding),side};
    }
  }
  const x=clamp((event.left+event.right-card.width)/2,padding,bounds.width-card.width-padding);
  const above=event.top-card.height-gap;
  if(above>=padding)return {x,y:above,side:'above'};
  const below=event.bottom+gap;
  if(below+card.height<=bounds.height-padding)return {x,y:below,side:'below'};
  // Compact calendars keep the card in bounds if neither vertical side fits.
  return {x,y:clamp(above,padding,bounds.height-card.height-padding),side:'above'};
}
