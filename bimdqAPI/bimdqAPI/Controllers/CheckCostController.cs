using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using bimdqAPI.Models;

namespace bimdqAPI.Controllers
{
    public class CheckCostController : ApiController
    {
        public checkcost[] data = new checkcost[]
          {
            new checkcost {
                           GlobalId="JL_kGtg6oQRaps8g",
                           IfcType = "IFCColumn",
                           Unit = "sqm",
                           Amount = 2113.45,
                           Price = 2000.45,
                           UnitPrice = 152.5,
                           Diameter = 60 ,
                           Height = 2.35},
            new checkcost {
                           GlobalId="hb0R5D9QnkW8OxfVjIe5cQ",
                           IfcType = "IFCWall",
                           Unit = null,
                           Amount = 4423.45,
                           Price = 2010.45,
                           UnitPrice = 162.5,
                           Diameter = 50 ,
                           Height = 2.35},
            new checkcost {GlobalId="MXTYsS4E20C66JrSfJPHKA",
                            IfcType = "IFCWall",
                           Unit = "cubicm",
                           Amount = 4413.45,
                           Price = 2000.45,
                           UnitPrice = 152.5,
                           Diameter = 90,
                           Height = 2.35},
            new checkcost { GlobalId="U7QcxLikekaScBQ6h0owlw", IfcType = "IFCWall",
                           Unit = "m",
                           Amount = 4423.45,
                           Price = null,
                           UnitPrice = 162.5,
                           Diameter = 40,
                           Height = 4},
            new checkcost {GlobalId="jHx0WHpzHkyJbSiaCGW_oQ", IfcType = "IFCWall",
                           Unit = "sqm",
                           Amount = 131.274,
                           Price = 11503.54,
                           UnitPrice = 87.63,
                           Diameter = 70,
                           Height = 2.35},
            new checkcost {GlobalId="", IfcType = "IFCColumn", //Incomplete
                           
                           Amount = 2668.248,
                           Price = 233818.57,
                           UnitPrice = 87.630,
                           Diameter = 60 ,
                           Height = 2.35},
            new checkcost {GlobalId="Kw_LZZJJSE_5JMSye27oog", IfcType = "IFCColumn",
                           Unit = "t",
                           Amount = 109.350,
                           Price = 558157.39,
                           UnitPrice = 5104.320,
                           Diameter = 100 , //Invalid
                           Height = 2.35},
            new checkcost {GlobalId="Z2gg6AdK2UGH4et6iVpueQ", IfcType = "IFCColumn",
                           Unit = "cubicm",
                           Amount = 397.458,
                           Price = 126781.66, //Inappropriate
                           UnitPrice = 318.780,
                           Diameter = 60,
                           Height = 2.35},
            new checkcost {GlobalId="wOtMIhNtpEuL2Ob7wg0vbQ", IfcType = "IFCColumn",
                           Unit = "sqm",
                           Amount = 131.274,
                           Price = 11503.54,
                           UnitPrice = 87.630,
                           Diameter = 70,
                           Height = 2.35},
            new checkcost {GlobalId="Brm7H89PkkGogIxprP6XbQ", IfcType = "IFCColumn",
                           Unit = "t",
                           Amount = 6.246,
                           Price = 31881.58,
                           UnitPrice = 5104.320,
                           Diameter = 70,
                           Height = 2.35},
            new checkcost {GlobalId="EyEJa6AeEGMKADgtWhAZQ", IfcType = "IFCColumn",
                           Unit = "cubicm",
                           Amount = 22.734,
                           Price = 7247.14,
                           UnitPrice = 318.780,
                           Diameter = 70,
                           Height = 2.35},
             new checkcost {GlobalId="8xJaDjD3hUqQ4LJH4wYW4Q", IfcType = "IFCColumn",
                           Unit = "sqm",
                           Amount = 138.996,
                           Price = 12180.22,
                           UnitPrice = 87.630,
                           Diameter = 75,
                           Height = 2.35},
             new checkcost {GlobalId="gLI7xgoUv0qVV9ViARuJ2A", IfcType = "IFCColumn",
                           Unit = "t",
                           Amount = 7.164,
                           Price = 36567.35,
                           UnitPrice = 5104.320,
                           Diameter = 75,
                           Height = 2.35},
             new checkcost {GlobalId="FzP5deLm0EuiFZVrjJFqeA", IfcType = "IFCColumn",
                           Unit = "cubicm",
                           Amount = 26.064,
                           Price = 8308.68,
                           UnitPrice = 318.780,
                           Diameter = 75,
                           Height = 2.35},
             new checkcost {GlobalId="adA4uDyRWUOk6JBbDRNzNQ", IfcType = "IFCWall",
                           Unit = "sqm",
                           Amount = 18927.052,
                           Price = 792286.40,
                           UnitPrice = 41.860,
                           Diameter = 50,
                           Height = 3},
             new checkcost {GlobalId="0eAPB8vDzhn4Q", IfcType = "IFCWall",
                           Unit = "t",
                           Amount = 304.937,
                           Price = 378109.68,
                           UnitPrice = 1239.960,
                           Diameter = 50,
                           Height = 3},
             new checkcost {GlobalId="iTctUWss97xCEQR1A", IfcType = "IFCWall",
                           Unit = "cubicm",
                           Amount = 4065.221,
                           Price = 883657.09,
                           UnitPrice = 217.370,
                           Diameter = 50,
                           Height = 3},
             new checkcost {GlobalId="PLgmcX61Tkum9PrMUjX5Uw", IfcType = "IFCWall",
                           Unit = "sqm",
                           Amount = 0.000,
                           Price = 0,
                           UnitPrice = 75.120,
                           Diameter = 50,
                           Height = 3},
            
    };
        public static checkcost[] ValidData;
        public static checkcost[] InValidData;
        public static checkcost[] CompleteData;
        public static checkcost[] InCompleteData;
        public static checkcost[] AppropriateData;
        public static checkcost[] InAppropriateData;

        [Route("api/checkcost/")]
        [HttpGet]
        public IEnumerable<checkcost> GetAllData()
        {
            return data;
        }
        /*[Route("api/checkcost/{name}")]
         public IHttpActionResult Get(string name)
         {
             var checkCost = data.Where(s => s.IfcType == name);
             // IEnumerable<string> nonEmptyStrings = strings.Where(s => !string.IsNullOrEmpty(s));
             if (data == null)
             {
                 return Content(HttpStatusCode.NotFound, "Ifcobject not found");
             }
             return Ok(checkCost);
         }*/

        //For Complete and Incomplete Data

        [Route("api/checkcost/complete")]
        [HttpGet]
        public checkcost[] GetCompleteData()
        {
            int i = 0, j = 0, ArraySizeComp = 0, ArraySizeInComp = 0;
            foreach (checkcost k in data)
            {
                if ((k.IfcType == "") ||
                    (k.Amount == null) ||
                    (k.Price == null) ||
                    (k.UnitPrice == null) ||
                    (k.Diameter == null) ||
                    (k.Height == null) ||
                    (k.Unit == null))
                {
                    ArraySizeInComp++;
                }
                else
                    ArraySizeComp++;
            }
            CompleteData = new checkcost[ArraySizeComp];
            InCompleteData = new checkcost[ArraySizeInComp];
            foreach (checkcost k in data)
            {
                if ((k.IfcType == "") ||
                    (k.Amount == null) ||
                    (k.Price == null) ||
                    (k.UnitPrice == null) ||
                    (k.Diameter == null) ||
                    (k.Height == null) ||
                    (k.Unit == null))
                {
                    InCompleteData[i] = k;
                    i++;
                }
                else
                {
                    CompleteData[j] = k;
                    j++;
                }
            }
            return (CompleteData);
        }
        [Route("api/checkcost/incomplete")]
        [HttpGet]
        public checkcost[] GetInCompleteData()
        {
            GetCompleteData();
            return (CheckCostController.InCompleteData);
        }

        //For Valid and Invalid Data
        [Route("api/checkcost/complete/valid")]

        public checkcost[] GetValidData()
        {
            int i = 0, j = 0, ArraySizeValid = 0, ArraySizeInvalid = 0;
            GetCompleteData();
            foreach (checkcost k in CompleteData)
            {
                if ((k.Diameter >= 35 & k.Diameter <= 75) &
                    (k.Height == 2.35 || k.Height == 3) &
                    (k.Unit == "t" || k.Unit == "m" || k.Unit == "sqm" || k.Unit == "cubicm")
                   )
                {
                    ArraySizeValid++;
                }
                else
                    ArraySizeInvalid++;
            }
            ValidData = new checkcost[ArraySizeValid];
            InValidData = new checkcost[ArraySizeInvalid];

            foreach (checkcost k in CompleteData)
            {
                if ((k.Diameter >= 35 & k.Diameter <= 75) &
                    (k.Height == 2.35 || k.Height == 3) &
                    (k.Unit == "t" || k.Unit == "m" || k.Unit == "sqm" || k.Unit == "cubicm")
                   )
                {
                    ValidData[i] = k;
                    i++;
                }
                else
                {
                    InValidData[j] = k;
                    j++;
                }
            }
            return (ValidData);
        }
        [Route("api/checkcost/complete/invalid")]
        [HttpGet]
        public checkcost[] GetInvalidData()
        {
            return (CheckCostController.InValidData);
        }


        //For Appropriate and Inappropriate Data

        [Route("api/checkcost/complete/valid/appropriate")]
        [HttpGet]
        public checkcost[] GetAppropriateData()
        {
            GetValidData();
            int i = 0, j = 0, ArraySizeApp = 0, ArraySizeInApp = 0;
            foreach (checkcost k in ValidData)
            {
                double? CalculatedAmount = ((k.Amount) * (k.UnitPrice));
                double myValue = CalculatedAmount ?? 0;
                double CA = Math.Round(myValue, 2);
                double myPrice = k.Price ?? 0;
                if (CA == myPrice)
                {
                    ArraySizeApp++;
                }
                else
                    ArraySizeInApp++;
            }
            AppropriateData = new checkcost[ArraySizeApp];
            InAppropriateData = new checkcost[ArraySizeInApp];
            foreach (checkcost k in ValidData)
            {
                double? CalculatedAmount = ((k.Amount) * (k.UnitPrice));
                double myValue = CalculatedAmount ?? 0;
                double CA = Math.Round(myValue, 2);
                double myPrice = k.Price ?? 0;
                if (CA == myPrice)
                {
                    AppropriateData[i] = k;
                    i++;
                }
                else
                {
                    InAppropriateData[j] = k;
                    j++;
                }
            }
            return (AppropriateData);
        }
        [Route("api/checkcost/complete/valid/inappropriate")]
        public checkcost[] GetInAppropriateData()
        {
            GetAppropriateData();
            return (InAppropriateData);
        }
    }
}


