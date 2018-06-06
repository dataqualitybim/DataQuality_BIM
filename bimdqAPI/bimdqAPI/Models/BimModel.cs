using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace bimdqAPI.Models
{
    public class Common
    {
        public string IfcType { get; set; }
        public string GlobalId { get; set; }
    }
        public class checkifc : Common
    {

        public string Tag { get; set; }
        public string Material { get; set; }
        public double? Breite { get; set; }
        public string Name { get; set; }
        public double? Radius { get; set; }
        public string Betonklasse { get; set; }
    }
    public class AmtofMtrl : Common
    {
        public string Name { get; set; }
        public string Tag { get; set; }
        public double? Briete { get; set; }
        public double? Volume { get; set; }
        public double? Lange { get; set; }
        public double? Height { get; set; }
        public double? Radius { get; set; }

    }
    public class checkcost : Common
    {
        public string Unit { get; set; }
        public double? Amount { get; set; }
        public double? Price { get; set; }
        public double? UnitPrice { get; set; }
        public double? Diameter { get; set; }
        public double? Height { get; set; }
    }

}