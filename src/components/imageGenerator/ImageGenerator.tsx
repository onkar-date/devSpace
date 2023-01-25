import { FormEvent, useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useAppDispatch } from '../../store/hooks';
import Toaster from '../toast/Toaster';
import './image.scss';
import { imageGeneratorActions } from './state/imageGenerator.actions';
import { imgGeneratorSelector } from './state/imageGenerator.selector';
import { generateImage } from './state/ImageGeneratorSlice';
import { BsImage } from "react-icons/bs";
const ImageGenerator = () => {
  const dispatch = useAppDispatch();
  const generateImgError = useSelector(imgGeneratorSelector.generateImgError);
  const generateImgStatus = useSelector(imgGeneratorSelector.generateImgStatus);
  const generatedImg = useSelector(imgGeneratorSelector.generatedImg);
  const [desc, setDesc] = useState('Cat Playing with butterfly');

  const generateImg = (e: FormEvent) => {
    e.preventDefault();
    if (desc) {
      dispatch(generateImage(desc))
    }
  }

  useEffect(() => {
    if (generateImgError) {
      setTimeout(() => {
        dispatch(imageGeneratorActions.removeError());
      }, 3000);
    }
  }, [generateImgError])


  const showImageElement = () => {
    if (generatedImg) {
      return <img src={`data:image/jpeg;base64,${generatedImg}`} alt={desc} />
    } else {
      if (generateImgStatus === 'IDLE') {
        return <BsImage size={'25rem'} color='grey' />;
      } else if (generateImgStatus === 'LOADING') {
        return <Spinner animation="border" style={{ width: "6rem", height: "6rem" }} variant='primary' />
      }
    }
  }
  return (
    <div>
      <h1 className='text-primary'>Image Generator</h1>

      <h5 className='text-muted py-4'>
        DALL·E 2 is a new AI system that can create realistic images and art from a description in natural language.
      </h5>

      <form onSubmit={generateImg}>
        <div className="form-group">
          <label htmlFor="desc" className='mb-2'>Enter Description</label>
          <input name='desc' id='desc' value={desc} onChange={(e) => setDesc(e.target.value)} className='form-control' />
        </div>

        <div className='d-flex justify-content-end mt-3'>
          <Button type='submit'>Generate</Button>
        </div>
      </form>

      <div className="preview">
        {showImageElement()}
      </div>
      {generateImgError && <Toaster bodyMsg={generateImgError} variant='danger' />}
    </div>
  )
}

export default ImageGenerator