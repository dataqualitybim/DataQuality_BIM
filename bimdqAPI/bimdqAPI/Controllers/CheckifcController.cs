using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using bimdqAPI.Models;

namespace bimdqAPI.Controllers
{

    public class CheckifcController : ApiController
    {

        public checkifc[] data = new checkifc[]

        {
            new checkifc { GlobalId="kLDURizPxUeuhfQRNm9hpQ", Tag = "Wall", IfcType = "IFCWall", Breite = 0.95, Name = "STB-Wand 50cm C30/37", Material = "Beton - Stahlbeton", Betonklasse="C30/37"},
            new checkifc  { GlobalId="wjmODXUqo0UQUbO7AXw", Tag = "Wall", IfcType = "IFCWall", Breite = 0.25, Name = "STB-Wand 50cm C30/37", Material = "Beton - Stahlbeton",Betonklasse="C10/37" },
            new checkifc { GlobalId="UYxR7sO7HEiMDnNWzHw",Tag = "Wall", IfcType = "IFCWall", Breite = 0.35, Name = "STB-Wand 50cm C30/37", Material = "Beton - Stahlbeton", Betonklasse="C30/37" },
            new checkifc { GlobalId="pmBvDeKIUeOq23JDwOZVg",Tag = "Wall", IfcType = "IFCWall", Breite = 0.6, Name = "STB-Wand 50cm C30/37", Material = "Beton - Stahlbeton", Betonklasse="C30/37" },
            new checkifc { GlobalId="YO_0nqmOPkWj4PPH5HguSA",Tag = "Wall", IfcType = "IFCBeam", Breite = 0.5, Name = "STB-Wand 50cm C30/37", Material = "Beton - Stahlbeton", Betonklasse="C30/37" },
            new checkifc { GlobalId="LSvs0zxVoEafxsz7QKehIg",Tag = "Beam", IfcType = "IFCBeam", Breite = 0.6, Name = "Überzug 60x52cm C30/37", Material = "Beton - Stahlbeton", Betonklasse="C30/37" },
            new checkifc { GlobalId="GHtgoAPIE06BCfoQy7JLxw",Tag = "", IfcType = "IFCWall", Breite = 0.6, Name = "Überzug 60x52cm C30/37", Material = "Beton - Stahlbeton" },
            new checkifc { GlobalId="",Tag = "xyz", IfcType = "IFCWall", Breite = 0.7, Name = "", Material = "Beton - Stahlbeton" },
             new checkifc { GlobalId="5DR_DoFcO0Spro_ZoSKFNQ",Tag = "", IfcType = "IFCColumn", Breite = 0.6, Name = "Überzug 60x52cm C30/37", Material = "Beton - Stahlbeton", Betonklasse="C30/37" },
            new checkifc { GlobalId="hl2u06J6AJz",Tag = "Column", IfcType = "IFCColumn", Radius = 0.3, Name = "Stütze rund ø75cm C30/37", Material = "Beton - Stahlbeton",Betonklasse="C30/37"},
            new checkifc { GlobalId="", Tag = "Column", IfcType = "IFCColumn", Radius = 0.375, Name = "Stütze rund ø75cm C90/105", Material = "Beton - Stahlbeton",Betonklasse="C90/105"},
            new checkifc { GlobalId="4b10H3tQhUKcPeAlAcPdyQ",
                            Tag = "Wall",
                           IfcType = "IFCWall",
                           Breite = 0.25,
                           Name = "STB-Wand 25cm C30/37",
                           Material = "Beton - Stahlbeton",
                           Betonklasse="C30/37"},
            new checkifc { GlobalId="VcnSbGhJq0i_tCIdQY41kQ",Tag = "Wall",
                           IfcType = "IFCWall",
                           Breite = 0.35,
                           Name = "STB-Wand 35cm C30/37",
                           Material = "Beton - Stahlbeton",
                           Betonklasse="C30/37" },
            new checkifc {GlobalId="5zsMSSNlU_cbnrcJOoGnw", Tag = "Wall",
                           IfcType = "IFCWall",
                           Breite = 0.5,
                           Name = "STB-Wand 50cm C30/37",
                           Material = "Beton - Stahlbeton",
                           Betonklasse="C30/37" },
            new checkifc { GlobalId="e_o5Gw2KekWDoa1JtIfE1w",Tag = "",
                           IfcType = "IFCWall",
                           Breite = 0.5,
                           Name = "STB-Wand 50cm C30/37",
                           Material = "Beton - Stahlbeton",
                           Betonklasse="C30/37" },
            new checkifc {GlobalId="dbka8hrFGUmQOj4jQw2iRA", Tag = "Wall",
                           IfcType = "IFCWall",
                           Breite = 0.9,
                           Name = "STB-Wand 50cm C30/37",
                           Material = "Beton - Stahlbeton",
                           Betonklasse="C30/37" },
            new checkifc { GlobalId="Uqk1yCYIPl4Xg",Tag = "Wall",
                           IfcType = "IFCWall",
                           Breite = 0.35,
                           Name = "STB-Wand 50cm C30/37",
                           Material = "Beton - Stahlbeton",
                           Betonklasse="C30/37" },
            new checkifc {GlobalId="6oNwhkiGjdQYiD0HUg", Tag = "Column",
                           IfcType = "IFCColumn",
                           Radius = 0.3,
                           Name = "Stütze rund ø60cm C30/37",
                           Material = "Beton - Stahlbeton",
                           Betonklasse="C30/37" },
            new checkifc { GlobalId="48XnvqjVVEO3QqOSAUIMTQ",Tag = "Column",
                           IfcType = "IFCColumn",
                           Radius = 0.375,
                           Name = "Stütze rund ø75cm C90/105",
                           Material = "Beton - Stahlbeton",
                           Betonklasse="C90/105"},
            new checkifc { GlobalId="80OOGqBeREO2tNgGHvfF5Q",Tag = "",
                           IfcType = "IFCColumn",
                           Radius = 0.375,
                           Name = "Stütze rund ø75cm C90/105",
                           Material = "Beton - Stahlbeton",
                           Betonklasse="C90/105"},
            new checkifc { GlobalId="X02IeGGEIpeu8Q",Tag = "Column",
                           IfcType = "IFCColumn",
                           Radius = 0.4,
                           Name = "Stütze rund ø75cm C90/105",
                           Material = "Beton - Stahlbeton",
                           Betonklasse="C90/105"},
            new checkifc {GlobalId="TJuJlP7zwkWMI8", Tag = "Column",
                           IfcType = "IFCColumn",
                           Radius = 0.3,
                           Name = "Stütze rund ø75cm C90/105",
                           Material = "Beton - Stahlbeton",
                           Betonklasse="C90/105"},
                };
        public static checkifc[] ValidData;
        public static checkifc[] InValidData;
        public static checkifc[] CompleteData;
        public static checkifc[] InCompleteData;
        public static checkifc[] AppropriateData;
        public static checkifc[] InAppropriateData;

        [Route("api/checkifc")]
        public IEnumerable<checkifc> GetAllData()
        {
            return data;
        }
        // GET: api/checkifc/complete
        [Route("api/checkifc/complete")]
        [HttpGet]
        public checkifc[] GetCompleteData()
        {
            int i = 0, j = 0, ArraySizeComp = 0, ArraySizeInComp = 0;
            foreach (checkifc k in data)
            {
                switch (k.IfcType)
                {
                    case "IFCWall":
                        {
                            if ((k.IfcType == "") ||
                       (k.Tag == "") ||
                       (k.Name == "") ||
                       (k.Breite == null) ||
                       (k.Betonklasse == "") ||
                       (k.Material == "") ||
                       (k.GlobalId=="")
                       )

                            {
                                ArraySizeInComp++;
                            }
                            else
                                ArraySizeComp++;
                        };
                        break;
                    case "IFCColumn":
                        {
                            if ((k.IfcType == "") ||
                       (k.Tag == "") ||
                       (k.Name == "") ||
                       (k.Radius == null) ||
                       (k.Betonklasse == "") ||
                       (k.Material == "") ||
                       (k.GlobalId == ""))

                            {
                                ArraySizeInComp++;
                            }
                            else
                                ArraySizeComp++;
                        };
                        break;
                }
            }
            CompleteData = new checkifc[ArraySizeComp];
            InCompleteData = new checkifc[ArraySizeInComp];
            foreach (checkifc k in data)
            {
                switch (k.IfcType)
                {
                    case "IFCWall":
                        {
                            if ((k.IfcType == "") ||
                    (k.Tag == "") ||
                    (k.Name == "") ||
                    (k.Breite == null) ||
                    (k.Material == "") ||
                       (k.GlobalId == "") )
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
                            if ((k.IfcType == "") ||
                   (k.Tag == "") ||
                   (k.Name == "") ||
                   (k.Radius == null) ||
                   (k.Material == "") ||
                       (k.GlobalId == ""))
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

        // GET: api/checkifc/InCompletData
        [Route("api/checkifc/incomplete")]
        [HttpGet]

        public checkifc[] GetInCompleteData()

        {
            GetCompleteData();
            return (CheckifcController.InCompleteData);
        }

        //For Valid and Invalid Data
        [Route("api/checkifc/complete/valid")]
        [HttpGet]
        public checkifc[] GetValidData()
        {
            int i = 0, j = 0, ArraySizeValid = 0, ArraySizeInvalid = 0;
            GetCompleteData();
            foreach (checkifc k in CompleteData)
            {
                switch (k.IfcType)
                {
                    case "IFCWall":
                        {
                            if ((k.Breite >= 0.25 & k.Breite <= 0.75))
                            {
                                ArraySizeValid++;
                            }
                            else
                                ArraySizeInvalid++;
                        };
                        break;
                    case "IFCColumn":
                        {
                            if ((k.Radius >= 0.3 & k.Radius <= 0.375))
                            {
                                ArraySizeValid++;
                            }
                            else
                                ArraySizeInvalid++;
                        };
                        break;
                }
            }
            ValidData = new checkifc[ArraySizeValid];
            InValidData = new checkifc[ArraySizeInvalid];

            foreach (checkifc k in CompleteData)
            {
                switch (k.IfcType)
                {
                    case "IFCWall":
                        {
                            if ((k.Breite >= 0.25 & k.Breite <= 0.75))
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
                            if ((k.Radius >= 0.3 & k.Radius <= 0.375))
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
        [Route("api/checkifc/complete/invalid")]
        [HttpGet]
        public checkifc[] GetInvalidData()
        {
            GetValidData();
            return (CheckifcController.InValidData);
        }
        // For AppropriateData and InAppropriateData
        [Route("api/checkifc/complete/valid/appropriate")]
        [HttpGet]
        public checkifc[] GetAppropriateData()
        {
            int i = 0, j = 0, ArraySizeAppropriate = 0, ArraySizeInAppropriate = 0;
            GetValidData();
            foreach (checkifc k in ValidData)
            {
                switch (k.IfcType)
                {
                    case "IFCWall":
                        {
                            if (((k.Name.Equals("STB-Wand 25cm C30/37")) & (k.Tag.Equals("Wall")) & (k.Betonklasse.Equals("C30/37")) & (k.Material.Equals("Beton - Stahlbeton")) & (k.Breite == 0.25)) ||
                              ((k.Name.Equals("STB-Wand 35cm C30/37")) & (k.Tag.Equals("Wall")) & (k.Betonklasse.Equals("C30/37")) & (k.Material.Equals("Beton - Stahlbeton")) & (k.Breite == 0.35)) ||
                              ((k.Name.Equals("STB-Wand 50cm C30/37")) & (k.Tag.Equals("Wall")) & (k.Betonklasse.Equals("C30/37")) & (k.Material.Equals("Beton - Stahlbeton")) & (k.Breite == 0.5)))
                            {
                                ArraySizeAppropriate++;
                            }
                            else
                                ArraySizeInAppropriate++;
                        };
                        break;
                    case "IFCColumn":
                        {
                            if (((k.Name.Equals("Stütze rund ø60cm C30/37")) & (k.Tag.Equals("Column")) & (k.Betonklasse.Equals("C30/37")) & (k.Radius == 0.3) & (k.Material.Equals("Beton - Stahlbeton"))) ||
                            ((k.Name.Equals("Stütze rund ø75cm C90/105")) & (k.Tag.Equals("Column")) & (k.Betonklasse.Equals("C90/105")) & (k.Radius == 0.375) & (k.Material.Equals("Beton - Stahlbeton"))))
                            {
                                ArraySizeAppropriate++;
                            }
                            else
                                ArraySizeInAppropriate++;
                        };
                        break;
                }

            }
            AppropriateData = new checkifc[ArraySizeAppropriate];
            InAppropriateData = new checkifc[ArraySizeInAppropriate];

            foreach (checkifc k in ValidData)
            {
                switch (k.IfcType)
                {
                    case "IFCWall":
                        {
                            if (((k.Name.Equals("STB-Wand 25cm C30/37")) & (k.Tag.Equals("Wall")) & (k.Betonklasse.Equals("C30/37")) & (k.Material.Equals("Beton - Stahlbeton")) & (k.Breite == 0.25)) ||
                            ((k.Name.Equals("STB-Wand 35cm C30/37")) & (k.Tag.Equals("Wall")) & (k.Betonklasse.Equals("C30/37")) & (k.Material.Equals("Beton - Stahlbeton")) & (k.Breite == 0.35)) ||
                             ((k.Name.Equals("STB-Wand 50cm C30/37")) & (k.Tag.Equals("Wall")) & (k.Betonklasse.Equals("C30/37")) & (k.Material.Equals("Beton - Stahlbeton")) & (k.Breite == 0.5)))
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
                            if (((k.Name.Equals("Stütze rund ø60cm C30/37")) & (k.Tag.Equals("Column")) & (k.Radius == 0.3) & (k.Betonklasse.Equals("C30/37")) & (k.Material.Equals("Beton - Stahlbeton"))) ||
                             ((k.Name.Equals("Stütze rund ø75cm C90/105")) & (k.Tag.Equals("Column")) & (k.Radius == 0.375) & (k.Betonklasse.Equals("C90/105")) & (k.Material.Equals("Beton - Stahlbeton"))))
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
                }
            }
            return (AppropriateData);
        }
        [Route("api/checkifc/complete/valid/inappropriate")]
        public checkifc[] GetInAppropriateData()
        {
            return (CheckifcController.InAppropriateData);
        }

    }
}


