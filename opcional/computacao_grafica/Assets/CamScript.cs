using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CamScript : MonoBehaviour
{

    int mod;
    public float ajusteX1 = 0f;
    public float ajusteY1 = 6f;
    public float ajusteZ1 = 0f;
    public float ajusteX2 = 0f;
    public float ajusteY2 = 10f;
    public float ajusteZ2 = -30f;
    public GameObject car;
    // Start is called before the first frame update
    void Start()
    {
        mod = 2;

    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.C))
        {
            mod = mod >= 2 ? 0 : mod+1;
        }

        if(mod == 0)
        {
            float x = car.transform.position.x + ajusteX1;
            float y = car.transform.position.y + ajusteY1;
            float z = car.transform.position.z + ajusteZ1;
            Vector3 pos = new Vector3(x, y, z);
            transform.position = pos;
            Quaternion quant = car.transform.rotation;
            transform.rotation = quant;
        }
        else if(mod == 1)
        {
            float x = car.transform.position.x + ajusteX2;
            float y = car.transform.position.y + ajusteY2;
            float z = car.transform.position.z + ajusteZ2;
            Vector3 pos = new Vector3(x, y, z);
            transform.position = pos;
            Quaternion quant = car.transform.rotation;
            transform.rotation = quant;
        }
        else
        {

            Vector3 pos = new Vector3(-8f, 468f, car.transform.position.z - 500f);
            transform.rotation = Quaternion.Euler(new Vector3(-315, -1.6f, 0.013f));
            transform.rotation = Quaternion.Euler(new Vector3(-315, -1.6f, 0.013f));
            transform.position = pos;
            transform.parent = car.transform;
        }

    }
}
