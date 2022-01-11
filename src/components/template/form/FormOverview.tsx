import { formOverviewData, ingredientBaseData } from '../../../data/FormData';
import { OverviewInput, IngredientBaseInput } from '../../reusable/FormInput';

function camelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

const renderOverviewInput = () => {
  return formOverviewData.map((overview, index) => {
    return (
      <OverviewInput
        key={index}
        type={overview.label !== 'Image' ? 'text' : 'file'}
        placeholder={overview.placeholder}
        label={overview.label}
        registerRef={overview.label.toLowerCase()}
      />
    );
  });
};

const renderIngredientOverview = () => {
  return ingredientBaseData.map((baseData, index) => {
    return (
      <IngredientBaseInput
        key={index}
        type={baseData.label === 'Serving' ? 'number' : 'text'}
        placeholder={baseData.placeholder}
        label={baseData.label}
        registerRef={camelCase(baseData.label)}
      />
    );
  });
};

const FormOverview = () => {
  return (
    <>
      <div className='h-5/6 flex flex-col justify-around px-3'>
        {renderOverviewInput()}
      </div>
      <div className='flex w-full px-3 justify-between'>
        {renderIngredientOverview()}
      </div>
    </>
  );
};

export default FormOverview;
