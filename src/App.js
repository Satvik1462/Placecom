import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Login from './component/pages/Login';
import Test from './component/pages/Test';
import Signup from './component/pages/Signup';
import Aptitude from './component/pages/Aptitude';
import Technical from './component/pages/Technical';
import Coding from './component/pages/Coding';
import TCSAptitude from './component/pages/Aptitude/TCS';
import Percentage from './PagesFile/Apti/percentage';
import ProfitLoss from './PagesFile/Apti/ProfitAndLoss';
import RatioProportion from './PagesFile/Apti/RationProportion';
import Average from './PagesFile/Apti/Average';
import Profile from './component/pages/user/Profile';
import TimeWork from './PagesFile/Apti/TimeWork';
import TSD from './PagesFile/Apti/TSD';
import SICI from './PagesFile/Apti/SICI';
import CI from './PagesFile/Apti/CI';
import NumberSystem from './PagesFile/Apti/NumberSystem';
import Probability from './PagesFile/Apti/Probability';
import PnC from './PagesFile/Apti/PnC';
import PipesNCistern from './PagesFile/Apti/PipesNCistern';
import MixNall from './PagesFile/Apti/mixNall';
import Ages from './PagesFile/Apti/Ages';
import LCMnHCF from './PagesFile/Apti/LCMnHCF';
import NumberSeries from './PagesFile/LoigicalReasoning/NumberSeries';
import LetterSeries from './PagesFile/LoigicalReasoning/LetterSeries';
import CodingDecoding from './PagesFile/LoigicalReasoning/CodingDecoding';
import BloodReln from './PagesFile/LoigicalReasoning/BloodReln';
import Direction from './PagesFile/LoigicalReasoning/Direction';
import SeatingArrangement from './PagesFile/LoigicalReasoning/SeatingArrangement';
import Syllogism from './PagesFile/LoigicalReasoning/Syllogism';
import OddOneOut from './PagesFile/LoigicalReasoning/OddOneOut';
import StatementConclusion from './PagesFile/LoigicalReasoning/StatementConclusion';
import Analogy from './PagesFile/LoigicalReasoning/Analogy';
import InfosysAptitude from './component/pages/Aptitude/Infosys';
import PartnerShip from './PagesFile/Apti/PartnerShip';
import BoatAndStream from './PagesFile/Apti/BoatAndStream';
import Clock from './PagesFile/Apti/Clock';
import CausesEffects from './PagesFile/LoigicalReasoning/CausesEffects';
import DataSufficiency from './PagesFile/LoigicalReasoning/DataSufficiency';
import Puzzle from './PagesFile/LoigicalReasoning/Puzzle';
import VennDiagram from './PagesFile/LoigicalReasoning/VennDiagram';
import Wipro from './component/pages/Aptitude/Wipro';
import AccentureAptitude from './component/pages/Aptitude/Accenture';
import DataInterpretation from './PagesFile/Apti/DataInterpretation';
import Simplification from './PagesFile/Apti/Simplification';
import AlgebraBasics from './PagesFile/Apti/AlgebraBasics';
import CapgeminiAptitude from './component/pages/Aptitude/Capegemini';
import CognizantAptitude from './component/pages/Aptitude/Cognizant';
import TCScoding from './PagesFile/Coding/TCScoding';
import InfosysCoding from './PagesFile/Coding/InfosysCoding';
import WiproCoding from './PagesFile/Coding/WiproCoding';
import AccentureCoding from './PagesFile/Coding/AccentureCoding';
import CapgeminiCoding from './PagesFile/Coding/CapgeminiCoding';
import CognizantCoding from './PagesFile/Coding/CognizantCoding';
import TcsTechnical from './PagesFile/Technical/TcsTechnical';
import WiproTechnical from './PagesFile/Technical/WiproTechnical';
import InfosysTechnical from './PagesFile/Technical/InfosysTechnical';
import AccentureTechnical from './PagesFile/Technical/AccentureTechnical';
import CapgeminiTechnical from './PagesFile/Technical/CapegeminiTechnical';
import CognizantTechnical from './PagesFile/Technical/CognizantTechnical';
import ForgotPassword from './component/pages/ForgotPassword';
import ProtectedRoute from './component/ProtectedRoute';
import AdminLogin from './component/pages/AdminLogin';
import AdminDashboard from './component/pages/AdminDashboard';
import AdminProtectedRoute from './component/AdminProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route
          path='/aptitude'
          element={
            <ProtectedRoute>
              <Aptitude />
            </ProtectedRoute>
          }
        />
        <Route path='/admin-login' element={<AdminLogin />} />

        <Route
          path='/admin-dashboard'
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />

        <Route
          path='/technical'
          element={
            <ProtectedRoute>
              <Technical />
            </ProtectedRoute>
          }
        />

        <Route
          path='/coding'
          element={
            <ProtectedRoute>
              <Coding />
            </ProtectedRoute>
          }
        />

        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path='/TCSAptitude' element={<TCSAptitude/>}/>
        <Route path='/Percentage' element={<Percentage/>}/>
        <Route path='/ProfitLoss' element={<ProfitLoss/>}  />
        <Route path='/RatioProportion' element={<RatioProportion />} />
        <Route path='/Average' element={<Average />} />
        <Route path='/TimeWork' element={<TimeWork />} />
        <Route path='/TSD' element={<TSD />} />
        <Route path='/SICI' element={<SICI />} />
        <Route path='/CI' element={<CI />} />
        <Route path='/NumberSystem' element={<NumberSystem />} />
        <Route path='/Probability' element={<Probability />} />
        <Route path='/PnC' element={<PnC />} />
        <Route path='/PipesNCistern' element={<PipesNCistern />} />
        <Route path='/mixNall' element={<MixNall />} />
        <Route path='/Ages' element={<Ages />} />
        <Route path='/LCMnHCF' element={<LCMnHCF />} />
        <Route path='/NumberSeries' element={<NumberSeries />} />
        <Route path='/LetterSeries' element={<LetterSeries />} />
        <Route path='/CodingDecoding' element={<CodingDecoding />} />
        <Route path='/BloodReln' element={<BloodReln />} />
        <Route path='/Direction' element={<Direction />} />
        <Route path='/SeatingArrangement' element={<SeatingArrangement />} />
        <Route path='/Syllogism' element={<Syllogism />} />
        <Route path='/OddOneOut' element={<OddOneOut />} />
        <Route path='/StatementConclusion' element={<StatementConclusion />} />
        <Route path='/Analogy' element={<Analogy />} />



        {/* INFOSYS */}

        <Route path='/InfosysAptitude' element={<InfosysAptitude />} />
        <Route path='/PartnerShip' element={<PartnerShip />} />
        <Route path='/BoatAndStream' element={<BoatAndStream />} />
        <Route path='/Clock' element={<Clock />} />
        <Route path='/CausesEffects' element={<CausesEffects />} />
        <Route path='/DataSufficiency' element={<DataSufficiency />} />
        <Route path='/Puzzle' element={<Puzzle />} />
        <Route path='/VennDiagram' element={<VennDiagram />} />
        <Route path='/Wipro' element={<Wipro />} />
        
        
        
        <Route path='/AccentureAptitude' element={<AccentureAptitude />} />
        <Route path='/DataInterpretation' element={<DataInterpretation />} />
        <Route path='/Simplification' element={<Simplification />} />
        <Route path='/AlgebraBasics' element={<AlgebraBasics />} />
        <Route path='/CapgeminiAptitude' element={<CapgeminiAptitude />} />
        <Route path='/CognizantAptitude' element={<CognizantAptitude />} />
        
        
        
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        

        






        


        {/* coding */}

        <Route path='/TCScoding' element={<TCScoding />} />
        <Route path='/InfosysCoding' element={<InfosysCoding />} />
        <Route path='/WiproCoding' element={<WiproCoding />} />
        <Route path='/AccentureCoding' element={<AccentureCoding />} />
        <Route path='/CapgeminiCoding' element={<CapgeminiCoding />} />
        <Route path='/CognizantCoding' element={<CognizantCoding />} />



        {/* Technical */}
        <Route path='/TcsTechnical' element={<TcsTechnical />} />
        <Route path='/WiproTechnical' element={<WiproTechnical />} />
        <Route path='/InfosysTechnical' element={<InfosysTechnical />} />
        <Route path='/AccentureTechnical' element={<AccentureTechnical />} />
        <Route path='/CapgeminiTechnical' element={<CapgeminiTechnical />} />
        <Route path='/CognizantTechnical' element={<CognizantTechnical />} />
        

        
        


      </Routes>
    </BrowserRouter>
   
  );
}
export default App;
