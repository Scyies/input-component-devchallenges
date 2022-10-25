import { Input } from './components/Input';

function App() {
  return (
    <div className='flex p-10 gap-10 flex-col'>
      <div className='grid grid-cols-3 gap-10'>
        <div className='flex flex-col gap-2'>
          <p className='font-popins'>{'<Input />'}</p>
          <Input placeholder='Placeholder' />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-popins'>&:hover</p>
          <Input placeholder='Placeholder' hover />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-popins'>&:focus</p>
          <Input placeholder='Placeholder' focus />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-popins'>{'<Input error />'}</p>
          <Input placeholder='Placeholder' error />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-popins'>&:hover</p>
          <Input placeholder='Placeholder' hover />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-popins'>&:focus</p>
          <Input placeholder='Placeholder' error />
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-popins'>{'<Input disabled />'}</p>
          <Input placeholder='Placeholder' disabled />
        </div>
      </div>

      <div className='grid grid-cols-2 gap-10'>
        <div>
          <p className='font-popins'>{'<Input helperText="something" />'}</p>
          <Input placeholder='Placeholder' helperText='something' />
        </div>
        <div>
          <p className='font-popins'>
            {'<Input helperText="something" error />'}
          </p>
          <Input placeholder='Placeholder' helperText='something' error />
        </div>
        <div>
          <p className='font-popins'>{'<Input startIcon="call" />'}</p>
          <Input placeholder='Placeholder' startIcon='call' />
        </div>
        <div>
          <p className='font-popins'>{'<Input endIcon="lock" />'}</p>
          <Input placeholder='Placeholder' endIcon='lock' />
        </div>
        <div>
          <p className='font-popins'>{'<Input value="text" />'}</p>
          <Input placeholder='Placeholder' value={'text'} />
        </div>
      </div>

      <div className='grid grid-cols-2 gap-10'>
        <div>
          <p className='font-popins'>{'<Input padding="sm" />'}</p>
          <Input placeholder='Placeholder' padding='sm' />
        </div>
        <div>
          <p className='font-popins'>{'<Input padding="md" />'}</p>
          <Input placeholder='Placeholder' padding='md' />
        </div>
      </div>

      <div>
        <p className='font-popins'>{'<Input fullWidth />'}</p>
        <Input placeholder='Placeholder' fullWidth />
      </div>

      <div>
        <p className='font-popins'>{'<Input multiline rows={4} />'}</p>
        <Input placeholder='Placeholder' multiline rows={4} />
      </div>
    </div>
  );
}

export default App;
