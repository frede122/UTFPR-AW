using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class scriptTransporte : MonoBehaviour
{
    // Start is called before the first frame update

    public GameObject pc;
    void Start()
    {
        
    }
    private void OnCollisionEnter(Collision collision)
    {

        if (collision.gameObject.Equals(pc.gameObject))
        {
            if(this.gameObject.tag == "portaA")
            {
                pc.transform.position = new Vector3(43, 2.4f, -19.6f);
            }
            if (this.gameObject.tag == "portaB")
            {
                pc.transform.position = new Vector3(-43f, 2.4f, -19.6f);
            }
        }
    }

    // Update is called once per frame
    void Update()
    {

    }
}
