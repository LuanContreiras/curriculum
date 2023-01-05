interface props{
  job: string;
  company: string;
  description: string;
  mountIn: string;
  yearIn: number;
  mountOut?: string;
  yearOut?: number;

}

export function JobCard(props: props){
  return(
    <div className="text-gray-600 mt-4 lg:text-sm">
      <strong className="">{props.job}</strong>
      <span> - {props.company}</span>
      <p className="text-sm  lg:leading-normal leading-relaxed">{props.description} {<br />}({props.mountIn} {props.yearIn} - {props.mountOut} {props.yearOut})</p>
    </div>
  )
}