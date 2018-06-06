using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web.Http;
using bimdqAPI.Models;

namespace bimdqAPI.Controllers
{
    public class AmtofmaterialController : ApiController
    {
        public AmtofMtrl[] data = new AmtofMtrl[]
        {
            new AmtofMtrl{ GlobalId = "djxPX46dgkSsIKlhf6OswQ", Tag = "Wall", IfcType = "IFCWall", Name = "STB-Wand 50cm C30/37", Briete = 0.5, Lange = 5.20, Height = 6, Volume = 500 },
            new AmtofMtrl{ GlobalId = "Jqqg9oBAWk_HIK9YaxDRDg",Tag = "Wall", IfcType = "IFCWall", Name = "STB-Wand 50cm C30/37", Briete = 0.25, Lange = 8.520, Height = null, Volume = 25.3200 },
            new AmtofMtrl{ GlobalId = "_5dVDduleUmqrjEJNiErfg",Tag = "Wall", IfcType = "IFCWall", Name = "STB-Wand 50cm C30/37", Briete = 0.5, Lange = 2.35, Height = 3.3, Volume =  3.8775},
            new AmtofMtrl{ GlobalId = "YwyUt1eaaEezDH0c$DqizQ", Tag = "Wall", IfcType = "IFCWall", Name = "STB-Wand 50cm C30/37", Briete = 0.78, Lange = 8.520, Height = 3.3, Volume = 25.3200 },
            new AmtofMtrl{ GlobalId = "tufh_B_7xkSzUTJIheL3qg", Tag = "Wall", IfcType = "IFCWall", Name = "STB-Wand 50cm C30/37", Briete = 0.5, Lange = 2.35, Height = 3.3, Volume =  52.025},
            new AmtofMtrl{ GlobalId = "V_H8EGSPA0KZPyGWzl_3Dw", Tag = "Wall", IfcType = "IFCWall", Name = "STB-Wand 35cm C30/37", Briete = 0.35, Lange = 2.35, Height = 3.3, Volume =  88.8775},
            new AmtofMtrl{ GlobalId = "TbRbNKgIQEiEU91S$iYkbA",Tag = "Beam", IfcType = "IFCWall", Name = "STB-Wand 25cm C30/37", Briete = 0.25, Lange = 4.355, Height = 3.3, Volume =  88.8775},
            new AmtofMtrl{ GlobalId = "PfnXb9ZrGkG7Bnm9TCb_vA",Tag = "Wall", IfcType = "IFCWall", Name = "STB-Wand 25cm C30/37", Briete = 0.25, Lange = 4.135, Height = 3.3, Volume =  3.411375},
            new AmtofMtrl{ GlobalId = "0sVMlBpeVE2z4N6xSVBw_Q",Tag = "Wall", IfcType = "IFCWall", Name = "STB-Wand 35cm C30/37", Briete = 0.35, Lange = 5.5, Height = 3.65, Volume =  3.411375},
            new AmtofMtrl{ GlobalId = "ms2Vk_Qshk_insoY4rEXLg",Tag = "Column", IfcType = "IFCColumn", Name = "Stutze rund ø60cm C30/37", Radius = 0.3, Height = 3.3, Volume =  0.93},
            new AmtofMtrl{ GlobalId = "qzx5L3dPwkO437xrboWaiw",Tag = "Wall", IfcType = "IFCColumn", Name = "Stutze rund ø60cm C30/37", Radius = 0.3, Height = 3.3, Volume =  0.93},
            new AmtofMtrl{ GlobalId = "JqP5S28JgkeC83LdTGHTUw",Tag = "", IfcType = "IFCColumn", Name = "Stutze rund ø60cm C30/37", Radius = 0.3, Height = 3.3, Volume =  0.93},
            new AmtofMtrl{ GlobalId = "W$C1R6wpg0uTK21XcPtohg",Tag = "Column", IfcType = "IFCColumn", Name = "Stutze rund ø75cm C90/105", Radius = 0.375, Height = 3.3, Volume =  1.46},
            new AmtofMtrl{ GlobalId = "_JIoM8CB6E25Y72I7RgX6g",Tag = "Column", IfcType = "IFCColumn", Name = "Stutze rund ø75cm C90/105", Radius = 0.375, Height = 3, Volume =  1.46},
            new AmtofMtrl{ GlobalId = "8diq0NSo$E6VfdHnYNHL3A",Tag = "Column", IfcType = "IFCColumn", Name = "Stutze rund ø75cm C90/105", Radius = 0.3, Height = 3.3, Volume =  0.93},
            new AmtofMtrl{ GlobalId = "c6asEV4do0mGzLVLznns1A",Tag = "Column", IfcType = "IFCColumn", Name = "", Radius = 0.3, Height = 3.3, Volume =  0.93},
            new AmtofMtrl{ GlobalId = "regIBx7F4kawt7SEoLscEw",Tag = "Column", IfcType = "IFCColumn", Name = "Stutze rund ø60cm C30/37", Radius = 0.3, Height = 3.3, Volume =  0.93},
            new AmtofMtrl{ GlobalId = "natPKvjBaUigiwa4OM$v7w",Tag = "Column", IfcType = "IFCColumn", Name = "Stutze rund ø60cm C30/37", Radius = 0.3, Height = 3.35, Volume =  0.93},
            new AmtofMtrl{ GlobalId = "mN4d7JPoIEillO3SbO3AFA",Tag = "Wall", IfcType = "IFCWall", Name = "STB-Wand 50cm C30/37", Briete = 0.5, Lange = 3, Height = 3.3, Volume = 4.95 },
            new AmtofMtrl{ GlobalId = "qr_zcK5vNUyMC4UBNVo1Yw",Tag = "Wall", IfcType = "IFCWall", Name = "STB-Wand 50cm C30/37", Briete = 0.5, Lange = 3, Height = 3.3, Volume = 500 },
        };


        [Route("api/aom")]
        public IEnumerable<AmtofMtrl> GetAllData()
        {
            return data;
        }


        public static AmtofMtrl[] CompleteData;
        public static AmtofMtrl[] InCompleteData;

        //For Complete and Incomplete Data

        [Route("api/aom/complete")]
        public AmtofMtrl[] GetCompleteData()
        {
            int i = 0, j = 0, ArraySizeComp = 0, ArraySizeInComp = 0;
            foreach (AmtofMtrl k in data)
            {
                switch (k.IfcType)
                {
                    case "IFCWall":
                        {
                            if ((k.Tag == "") ||
                    (k.Name == "") ||
                    (k.Briete == null) ||
                    (k.Lange == null) ||
                    (k.Height == null) ||
                    (k.Volume == null))
                            {
                                ArraySizeInComp++;
                            }
                            else
                                ArraySizeComp++;
                        };
                        break;

                    case "IFCColumn":
                        {
                            if ((k.Tag == "") ||
                    (k.Name == "") ||
                    (k.Radius == null) ||
                    (k.Height == null) ||
                    (k.Volume == null))
                            {
                                ArraySizeInComp++;
                            }
                            else
                                ArraySizeComp++;
                        };
                        break;
                }
            }
            CompleteData = new AmtofMtrl[ArraySizeComp];
            InCompleteData = new AmtofMtrl[ArraySizeInComp];

            foreach (AmtofMtrl k in data)
            {
                switch (k.IfcType)
                {
                    case "IFCWall":
                        {
                            if ((k.Tag == "") ||
                    (k.Name == "") ||
                    (k.Briete == null) ||
                    (k.Lange == null) ||
                    (k.Height == null) ||
                    (k.Volume == null))
                            {
                                InCompleteData[i] = k;
                                i++;
                            }
                            else
                            {
                                CompleteData[j] = k;
                                j++;
                            }
                        };
                        break;

                    case "IFCColumn":
                        {
                            if ((k.Tag == "") ||
                                (k.Name == "") ||
                                (k.Radius == null) ||
                                (k.Height == null) ||
                                (k.Volume == null))
                            {
                                InCompleteData[i] = k;
                                i++;
                            }
                            else
                            {
                                CompleteData[j] = k;
                                j++;
                            }

                        };
                        break;
                }

            }
            return (CompleteData);
        }

        [Route("api/aom/incomplete")]
        public AmtofMtrl[] GetInCompleteData()

        {
            GetCompleteData();
            return (AmtofmaterialController.InCompleteData);
        }


        public static AmtofMtrl[] ValidData;
        public static AmtofMtrl[] InValidData;


        //For Valid and Invalid Data
        [Route("api/aom/complete/valid")]

        public AmtofMtrl[] GetValidData()
        {
            int i = 0, j = 0, ArraySizeValid = 0, ArraySizeInvalid = 0;
            GetCompleteData();
            foreach (AmtofMtrl k in CompleteData)
            {
                switch (k.IfcType)
                {
                    case "IFCWall":
                        {
                            if ((k.Briete >= 0.25 & k.Briete < 0.60) &
                                (k.Lange == 2.35 || k.Lange == 3) &
                                (k.Height == 3.3))
                            {
                                ArraySizeValid++;
                            }
                            else
                                ArraySizeInvalid++;
                        };
                        break;

                    case "IFCColumn":
                        {
                            if ((k.Radius == 0.375 || k.Radius == 0.3) &
                                (k.Height == 3.3))
                            {
                                ArraySizeValid++;
                            }
                            else
                                ArraySizeInvalid++;
                        };
                        break;

                }
            }
            ValidData = new AmtofMtrl[ArraySizeValid];
            InValidData = new AmtofMtrl[ArraySizeInvalid];

            foreach (AmtofMtrl k in CompleteData)
            {
                switch (k.IfcType)
                {
                    case "IFCWall":
                        {
                            if ((k.Briete >= 0.25 & k.Briete < 0.60) &
                                (k.Lange == 2.35 || k.Lange == 3) &
                                (k.Height == 3.3))
                            {
                                ValidData[i] = k;
                                i++;
                            }
                            else
                            {
                                InValidData[j] = k;
                                j++;
                            }
                        };
                        break;

                    case "IFCColumn":
                        {
                            if ((k.Radius == 0.375 || k.Radius == 0.3) &
                                (k.Height == 3.3))
                            {
                                ValidData[i] = k;
                                i++;
                            }
                            else
                            {
                                InValidData[j] = k;
                                j++;
                            }
                        };
                        break;

                }
            }
            return (ValidData);
        }

        [Route("api/aom/complete/invalid")]

        public AmtofMtrl[] GetInvalidData()
        {
            GetValidData();
            return (AmtofmaterialController.InValidData);
        }

        public static AmtofMtrl[] AppropriateData;
        public static AmtofMtrl[] InAppropriateData;

        [Route("api/aom/complete/valid/appropriate")]

        public AmtofMtrl[] GetAppropriateData()
        {
                        
                int i = 0, j = 0, ArraySizeAppropriate = 0, ArraySizeInappropriate = 0;
                GetValidData();

                foreach (AmtofMtrl k in ValidData)
                {


                    switch (k.IfcType)
                    {
                        case "IFCWall":
                            {
                                double v = (k.Briete * k.Height * k.Lange) ?? 0;
                                if (
                                    (((String.Equals(Regex.Replace(k.Name.ToLower(), @"[^\w\d\s]", ""),
                                    Regex.Replace("STB-Wand 50cm C30/37".ToLower(), @"[^\w\d\s]", ""))) & (k.Briete == 0.5)) ||
                                    ((String.Equals(Regex.Replace(k.Name.ToLower(), @"[^\w\d\s]", ""),
                                    Regex.Replace("STB-Wand 25cm C30/37".ToLower(), @"[^\w\d\s]", ""))) & (k.Briete == 0.25)) ||
                                    ((String.Equals(Regex.Replace(k.Name.ToLower(), @"[^\w\d\s]", ""),
                                    Regex.Replace("STB-Wand 35cm C30/37".ToLower(), @"[^\w\d\s]", ""))) & (k.Briete == 0.35))) &&
                                    (k.Tag.Equals("Wall")) &&
                                    (k.IfcType.Equals("IFCWall")) &&
                                    (v == k.Volume)
                                    )
                                {

                                    ArraySizeAppropriate++;
                                }
                                else
                                {

                                    ArraySizeInappropriate++;

                                }
                            };
                            break;

                        case "IFCColumn":
                            {
                                double e = (3.14 * k.Radius * k.Height * k.Radius) ?? 0;
                                if (
                                    ((String.Equals(Regex.Replace(k.Name.ToLower(), @"[^\w\d\s]", ""), Regex.Replace("Stutze rund ø60cm C30/37".ToLower(), @"[^\w\d\s]", ""))) & (k.Radius == 0.3)) ||
                                    ((String.Equals(Regex.Replace(k.Name.ToLower(), @"[^\w\d\s]", ""), Regex.Replace("Stutze rund ø75cm C90105".ToLower(), @"[^\w\d\s]", ""))) & (k.Radius == 0.375)) &
                                   (k.Tag.Equals("Column")) &
                                   (Math.Round(e, 2) == k.Volume)
                                   )
                                {

                                    ArraySizeAppropriate++;
                                }
                                else
                                {

                                    ArraySizeInappropriate++;

                                };
                                break;
                            }

                    }

                }

                AppropriateData = new AmtofMtrl[ArraySizeAppropriate];
                InAppropriateData = new AmtofMtrl[ArraySizeInappropriate];

                foreach (AmtofMtrl k in ValidData)
                {

                    switch (k.IfcType)
                    {
                        case "IFCWall":
                            {
                                double v = (k.Briete * k.Height * k.Lange) ?? 0;
                                if (
                                    (((String.Equals(Regex.Replace(k.Name.ToLower(), @"[^\w\d\s]", ""), Regex.Replace("STB-Wand 50cm C30/37".ToLower(), @"[^\w\d\s]", ""))) & (k.Briete == 0.5)) ||
                                    ((String.Equals(Regex.Replace(k.Name.ToLower(), @"[^\w\d\s]", ""), Regex.Replace("STB-Wand 25cm C30/37".ToLower(), @"[^\w\d\s]", ""))) & (k.Briete == 0.25)) ||
                                    ((String.Equals(Regex.Replace(k.Name.ToLower(), @"[^\w\d\s]", ""), Regex.Replace("STB-Wand 35cm C30/37".ToLower(), @"[^\w\d\s]", ""))) & (k.Briete == 0.35))) &
                                    (k.Tag.Equals("Wall")) &&
                                    (k.IfcType.Equals("IFCWall")) &&
                                    (v == k.Volume)
                                    )
                                {

                                    AppropriateData[i] = k;
                                    i++;



                                }
                                else
                                {

                                    InAppropriateData[j] = k;
                                    j++;

                                }
                            };
                            break;

                        case "IFCColumn":
                            {
                                double e = (3.14 * k.Radius * k.Height * k.Radius) ?? 0;
                                if (
                                    ((String.Equals(Regex.Replace(k.Name.ToLower(), @"[^\w\d\s]", ""), Regex.Replace("Stutze rund ø60cm C30/37".ToLower(), @"[^\w\d\s]", ""))) & (k.Radius == 0.3)) ||
                                    ((String.Equals(Regex.Replace(k.Name.ToLower(), @"[^\w\d\s]", ""), Regex.Replace("Stutze rund ø75cm C90105".ToLower(), @"[^\w\d\s]", ""))) & (k.Radius == 0.375)) &
                                   (k.Tag.Equals("Column")) &
                                   (Math.Round(e, 2) == k.Volume)
                                   )
                                {

                                    AppropriateData[i] = k;
                                    i++;
                                }
                                else
                                {


                                    InAppropriateData[j] = k;
                                    j++;

                                };
                                break;
                            }
                    }

                }

                return (AppropriateData);

            }
        [Route("api/aom/complete/valid/inappropriate")]
        public AmtofMtrl[] GetInAppropriateData()
        {
            return (AmtofmaterialController.InAppropriateData);
        }

    }
}

