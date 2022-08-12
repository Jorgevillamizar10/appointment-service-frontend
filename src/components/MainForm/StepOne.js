
export const StepOne = ({onHandleOption}) => {
  return (
    <div style={{"display": "flex",
      "flexDirection": "column",
      'alignItems': 'center',
      'padding': '40px 24px',
      'gap': '40px',
      'width': '816px',
      'height': '224px',
      'boxShadow': '0px 6px 12px rgba(198, 198, 198, 0.12)',
      'borderRadius': '16px'}}
      className='bg-white'
    >
      <div onClick={() => onHandleOption('diagnosticado')} className="bg-white flex items-center justify-between p-4 border border-[#E5E7EB] hover:border-[#104990] cursor-pointer" style={{"boxShadow": "0px 3px 6px rgba(198, 198, 198, 0.12)","borderRadius": "8px", "width": "768px"}}>
        <span className="mr-">Ya me diagnosticaron un Virus.</span>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.9336 0.131836L10.6523 0.37793C10.5117 0.553711 10.5117 0.799805 10.6523 0.975586L13.6055 3.89355H0.421875C0.175781 3.89355 0 4.10449 0 4.31543V4.66699C0 4.91309 0.175781 5.08887 0.421875 5.08887H13.6055L10.6523 8.04199C10.5117 8.21777 10.5117 8.46387 10.6523 8.63965L10.9336 8.88574C11.0742 9.06152 11.3555 9.06152 11.5312 8.88574L15.6094 4.80762C15.7852 4.63184 15.7852 4.38574 15.6094 4.20996L11.5312 0.131836C11.3555 -0.0439453 11.0742 -0.0439453 10.9336 0.131836Z" fill="#104990"/>
        </svg>
      </div>
      <div onClick={() => onHandleOption('diagnosticar')} className="bg-white flex items-center justify-between p-4 border border-[#E5E7EB] hover:border-[#104990] cursor-pointer" style={{"boxShadow": "0px 3px 6px rgba(198, 198, 198, 0.12)","borderRadius": "8px", "width": "768px"}}>
        <span className="mr-">No me han diagnosticaron un Virus.</span>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.9336 0.131836L10.6523 0.37793C10.5117 0.553711 10.5117 0.799805 10.6523 0.975586L13.6055 3.89355H0.421875C0.175781 3.89355 0 4.10449 0 4.31543V4.66699C0 4.91309 0.175781 5.08887 0.421875 5.08887H13.6055L10.6523 8.04199C10.5117 8.21777 10.5117 8.46387 10.6523 8.63965L10.9336 8.88574C11.0742 9.06152 11.3555 9.06152 11.5312 8.88574L15.6094 4.80762C15.7852 4.63184 15.7852 4.38574 15.6094 4.20996L11.5312 0.131836C11.3555 -0.0439453 11.0742 -0.0439453 10.9336 0.131836Z" fill="#104990"/>
        </svg>
      </div>
    </div>
  )
}