import Button from './components/button';

const App = () => {
  return (
    <main className='bg-black h-screen text-gray-50 flex items-center justify-center'>
      <Button
        handleClick={() => {}}
        styles={'w-fit bg-violet-500'}
        type={'button'}
        title={'Open modal'}
        disabled={false}
      >
        {/* children */}
        Open modal
      </Button>
    </main>
  );
};

export default App;
